import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CartItem from './CartItem';
import './Cart.css'

const CartStyles = styled.div`
padding:5rem 0;
`;

const Cart = ({ firstItems }) => {
	// const firstState = JSON.parse(
	// window.localStorage.setItem("items", JSON.stringify('items'))
	// );
	//inside the usestate(firststate || firstitems)
	const [items, setItems] = useState( firstItems);
	
	const updateQty = (id,newQty) => {
		const newItems = items.map(item => {
			if (item.id === id) {
				return{...item,qty:newQty}
			}
			return item
		})
		setItems(newItems)
	}

	
	const finalTotal = items.reduce((total, item) => (
		total + item.qty * item.price
	), 0).toFixed(3)
	
	useEffect(() => {
	window.localStorage.setItem('items',JSON.stringify(items))
},[items])

  return (
	<CartStyles className='Cart'>
		  <h1 className='cart-title'>SHOPPING CART</h1>
		  <div className='Cart-Item'>
			  { items.map(item => (
				//   <li>name: {item.id} {item.name} {item.price} {item.qty}</li>
				  <CartItem key={item.id} updateQty={updateQty} {...item}/>
			  ))}
		  </div>
		  <h2 className='cart-total'>Final Total: ${finalTotal}</h2>
	</CartStyles>
  )
}

export default Cart
