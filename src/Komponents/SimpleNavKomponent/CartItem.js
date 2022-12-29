import React from 'react' 

import './CartItem.css'

const CartItem = ({ id, name, price, qty, updateQty }) => {
	
	const plus = () => {
		updateQty(id, qty + 1)
		
	}
	const minus = () => {
    updateQty(id, qty - 1);
  };
  return (
    <div className="CartItem">
      <div>{id}</div>
      <div>{name}</div>
		<div>${ price }</div>
	  <button onClick={minus} disabled={qty <= 1}>-</button>
	  <div>{ qty }</div>
	  <button onClick={plus}>+</button>
      <div>Total: ${qty*price}</div>
    </div>
  );
}

export default CartItem
