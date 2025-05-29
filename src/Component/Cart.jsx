import React, { useContext } from 'react';
import MyContext from '../context';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartProducts, sum, setSum, setCartProducts }) => {
  let pro;
  const currentUser = useContext(MyContext).currentUser;

  const navigate = useNavigate();
  const payment = () => {
    navigate('/MyOrder');
  }

  const deleteItemFromCart = (id) => {
    const productToDelete = cartProducts.filter(p => p.id !== id);
    const coppyArr = [...cartProducts];
    coppyArr.splice(productToDelete, 1)    //מעדכנת את מערך של הסל במערך החדש שבו מחקתי את המוצר
    setCartProducts(coppyArr)
    let newSum = 0;
    coppyArr.forEach(pro => {
      newSum += pro.price;
    });
    setSum(newSum);
  }
  return (
    <div className="cart-container">
      <h1>my cart!</h1>
      <div className="cart-items">
        {cartProducts.map(p => (
          <div className="cart-item" >
            <div className="cart-item-details">
              <img src={`/Pics/${p.image}`} alt={p.name} style={{ width: '150px', borderRadius: '8px' }} />
              <h3>{p.name}</h3>
              <h6>Price: {p.price} ILS</h6>
              <h6>Amount of pieces: {p.amountOfPieces}</h6>
            </div>
            <button onClick={() => deleteItemFromCart(p.id)}>Delete item</button>
          </div>
        ))}

        {cartProducts.length > 0 ? (<>
          <h4>Your total is: {sum}</h4>
          <button onClick={payment}>Payment</button></>) :
          (<p>Your cart is empty!</p>)}

      </div>
    </div>
  )
}

export default Cart