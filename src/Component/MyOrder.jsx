import React from 'react'

const MyOrder = ({ setCartProducts, cartProducts, sum, setSum }) => {
  const submit = () => {
    alert("your order has been placed! Thank you!💕")
    setCartProducts([])
    setSum(0);
  }
  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartProducts.map(p => (
          <div className="cart-item" >
            <div className="cart-item-details">
              <img src={`/Pics/${p.image}`} alt={p.name} style={{ width: '150px', borderRadius: '8px' }} />
              <h3>{p.name}</h3>
              <h6>Price: {p.price} ILS</h6>
              <h6>Amount of pieces: {p.amountOfPieces}</h6>
            </div>
          </div>))}
        {cartProducts.length > 0 ? (<>
          <h4>Your total is: {sum}</h4>
          <button onClick={() => submit()}>confirmation</button></>) :
          (<p>Your cart is empty!</p>)}


      </div>
    </div>

  )
}

export default MyOrder