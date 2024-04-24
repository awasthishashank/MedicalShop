import React from 'react';
import { useMedicalContext } from '../../context/MedicalContext';

function Cart() {
  const { cartItems, total, clearCart } = useMedicalContext();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
      <p>Total: {total}</p>
      <button onClick={clearCart}>Generate Bill</button>
    </div>
  );
}

export default Cart;
