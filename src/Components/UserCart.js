import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../redux/userReducer';
import StripeCheckout from 'react-stripe-checkout';
import { PUBLISHABLE_KEY } from './Stripe';


class UserCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            totalPrice: 0
        }
    }

    componentDidMount() {
        this.getCart()
    }

    getCart() {
        axios.get(`/api/cart/${this.props.userReducer.user.customer_order_id}`)
            .then(res => {
                this.setState({ cart: res.data })
                this.getTotal()
            })

            .catch(err => console.log(err));
    }

    removeFromCart(order_item_id) {
        console.log(order_item_id)
        axios.delete(`/api/cart/${order_item_id}`).then(res => {
            this.getCart()
            window.alert('Item removed')
        }).catch(err => console.log(err));
    }

    getTotal = () => {
        const { cart } = this.state;
        const total = cart.reduce((acc, cur) => parseFloat(acc) + parseFloat(cur.price), 0)
        this.setState({ totalPrice: total })
    }

    onToken = token => {
        const { totalPrice } = this.state;
        axios.post('/api/payment', {
            token, totalPrice, customer_order_id: this.props.userReducer.user.customer_order_id, user_id: this.props.userReducer.user.user_id, username: this.props.userReducer.user.username
        })
            .then(res => {
            })
            .catch(res => {
                window.alert('Payment Succesful')
                this.props.getUser(res.data)
                this.setState({cart: [], totalPrice: 0})
            })
    }


    render() {
        const mappedCart = this.state.cart.map((e, i) => {
            // console.log(e)
            return (
                <ul className='product-list'>
                    <div key={i} className='product-box'>
                        <div className='product-box-top'>
                            <img src={e.product_img} alt={e.product_name} className='product-box-img' />
                        </div>
                        <div className="product-box-bot">
                            <div className="product-box-text">
                                <p>{e.product_name}</p>
                                <p>{e.product_description}</p>
                                <div>${e.price}</div>
                            </div>
                            <button className='remove-button'onClick={() => this.removeFromCart(e.order_item_id)}>Remove</button>
                        </div>
                    </div>
                </ul>
            )
        })
        return (
            <div className="UserCart">
                <header className='cart-nav'>
                    <div className='pick-nav'>
                        <button id='logout' onClick={() => axios.post('/auth/logout')
                            .then(res => this.props.getUser(res.data), this.props.history.push('/'))} className='logout'>Logout</button>
                    </div>
                </header>
                <div className='product-container'>
                    <div className='main-product-container'>
                        <div>{mappedCart}</div>
                    </div>
                    <div className= 'checkout'>
                        <p>Total: ${this.state.totalPrice.toFixed(2)}</p>
                        <StripeCheckout
                            name='bankname'
                            description='making a payment'
                            stripeKey={PUBLISHABLE_KEY}
                            token={this.onToken}
                            amount={this.state.totalPrice * 100}
                            panelLabel="Submit Payment"
                            allowRememberMe={true}
                            billingAddress={false}
                            zipCode={false}
                        >
                            <button className='checkout-button'>Checkout</button>
                        </StripeCheckout>
                    </div>

                </div>
                <footer>
                    <div onClick={() => this.props.history.push("/")} className="logo footer-logo">
                        BikeBuilder
                    </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default withRouter(connect(mapStateToProps, { getUser })(UserCart));
