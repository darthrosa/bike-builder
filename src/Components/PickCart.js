import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../redux/userReducer';
import {withRouter} from 'react-router-dom';

class PickCart extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      // category: 0,
      setFrame: true,
      setTires: false,
      setHandleBars: false,
      setForks: false,
      setPedals: false
    }
  }

  componentDidMount(){
    axios.get(`/api/skill/${this.props.match.params.id}`).then(res => { console.log(res)
      this.setState({products: res.data})
    })
  }

  handleToggle = (name) => {
    this.setState({
      setFrame: false,
      setTires: false,
      setHandleBars: false,
      setForks: false,
      setPedals: false
    })
    this.setState({[name]: true})
  }

  addToCart = (id, price) => {
    axios.post('/api/cart', {
      customer_order_id: this.props.userReducer.user.customer_order_id,
      product_id: id,
      price
    }).then(res => {
      window.alert('Item added to cart')
    }).catch(err => console.log(err));
  }
  
  render(){
    const frameDisplay = this.state.products.map((e, i) => {
      if (e.category_id === 1){
        return (<div key={i}>
          <div>{e.product_name}</div>
          <img className='product-img' src={e.product_img} alt='product-img'/>
          <p>{e.product_description}</p>
          <div>{e.price}</div>
          <button id='setTires' onClick={async (f) => {
            await this.handleToggle(f.target.id)
          this.addToCart(e.product_id, e.price)
          }}>Add to Cart</button>
        </div>)
      }
    })
    const tireDisplay = this.state.products.map((e, i) => {
      if (e.category_id === 2){
        return (<div>
          <div>{e.product_name}</div>
          <img className='product-img' src={e.product_img} alt='product-img'/>
          <p>{e.product_description}</p>
          <div>{e.price}</div>
          <button id='setHandleBars' onClick={async (f) => {
            await this.handleToggle(f.target.id)
          this.addToCart(e.product_id, e.price)
          }}>Add to Cart</button>
        </div>)
      }
    })
    const handleBarDisplay = this.state.products.map((e, i) => {
      if (e.category_id === 3){
        return (<div>
          <div>{e.product_name}</div>
          <img className='product-img' src={e.product_img} alt='product-img'/>
          <p>{e.product_description}</p>
          <div>{e.price}</div>
          <button id='setForks' onClick={async (f) => {
            await this.handleToggle(f.target.id)
          this.addToCart(e.product_id, e.price)
          }}>Add to Cart</button>
        </div>)
      }
    })
    const forkDisplay = this.state.products.map((e, i) => {
      if (e.category_id === 4){
        return (<div>
          <div>{e.product_name}</div>
          <img className='product-img' src={e.product_img} alt='product-img'/>
          <p>{e.product_description}</p>
          <div>{e.price}</div>
          <button id='setPedals' onClick={async (f) => {
            await this.handleToggle(f.target.id)
          this.addToCart(e.product_id, e.price)
          }}>Add to Cart</button>
        </div>)
      }
    })
    const pedalDisplay = this.state.products.map((e, i) => {
      if (e.category_id === 6){
        return (<div>
          <div>{e.product_name}</div>
          <img className='product-img' src={e.product_img} alt='product-img'/>
          <p>{e.product_description}</p>
          <div>{e.price}</div>
          <button id='setFrame' onClick={async (f) => {
            await this.handleToggle(f.target.id)
          this.addToCart(e.product_id, e.price)
          }}>Add to Cart</button>
        </div>)
      }
    })
    return (
      <div className="PickCart">
        <header className='cart-nav'>
          <div className='category'>
            <div id='setFrame' 
                 className='link' onClick={(e) => this.handleToggle(e.target.id)}>Frame</div>
            <div id='setTires'
                 className='link' onClick={(e) => this.handleToggle(e.target.id)}>Tires</div>
            <div id='setHandleBars'
                 className='link' onClick={(e) => this.handleToggle(e.target.id)}>Handle Bars</div>
            <div id='setForks' 
                 className='link' onClick={(e) => this.handleToggle(e.target.id)}>Forks</div>
            <div id='setPedals' 
                 className='link' onClick={(e) => this.handleToggle(e.target.id)}>Pedals</div>
          </div>
          <div className='pick-nav'>
          <div className='cart-img'onClick={() => this.props.history.push('/cart')}> Cart </div>
          <button id='logout'onClick={() => axios.post('/auth/logout')
          .then( res => this.props.getUser(res.data), this.props.history.push ('/'))} className='logout'>Logout</button>
          </div>
        </header>
        <div className='product-container'>
          {this.state.setFrame && (
            <div>{frameDisplay}</div>
          )}
          {this.state.setTires && (
            <div>{tireDisplay}</div>
          )}
          {this.state.setHandleBars && (
            <div>{handleBarDisplay}</div>
          )}
          {this.state.setForks && (
            <div>{forkDisplay}</div>
          )}
          {this.state.setPedals && (
            <div>{pedalDisplay}</div>
          )}
        </div>
        <footer id='cart-footer'></footer>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
}

export default withRouter(connect(mapStateToProps, {getUser})(PickCart))