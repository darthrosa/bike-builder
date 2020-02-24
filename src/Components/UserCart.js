import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../redux/userReducer';


class UserCart extends Component {
  constructor(props){
    super(props)
    this.state = {
        cart: []
    }
  }

  componentDidMount(){
    axios.get(`/api/cart/${this.props.userReducer.user.customer_order_id}`)
    .then(res => {this.setState({cart: res.data})
        console.log(res.data)})
        
    .catch(err => console.log(err));
}

removeFromCart(){
    axios.delete(`/api/cart/${this.props.userReducer.user.customer_order_id}`).then(res => {
        this.setState({cart: res.data})
        window.alert('Item removed')
      }).catch(err => console.log(err));
}
  

  render(){
    const mappedCart = this.state.cart.map((e, i) => {
        console.log(e)
        return (
            <div key={i} className='product-container'>
                <p>{e.product_name}</p>
                <img src={e.product_img} alt={e.product_name} className='product-img'/>
                <p>{e.product_description}</p>
                <div>{e.price}</div>
                <button onClick={(e) => this.removeFromCart(e.order_item_id)}>Remove</button>
           </div> 
        )
    })
    return (
      <div className="UserCart">
        <div className='product-container'>
            <div>{mappedCart}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default withRouter(connect(mapStateToProps, {getUser})(UserCart));
