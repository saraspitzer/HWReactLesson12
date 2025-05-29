import React,{useContext, useState} from 'react'
import ProductInfo from './ProductInfo'
import { useNavigate } from 'react-router-dom'
import MyContext from '../context';
const Products = ({ products,setCartProducts,cartProducts,setSum,sum }) => {
  const navigate = useNavigate()
  const currentUser = useContext(MyContext).currentUser;
  const handleMoreInfo = (id) => {
    // נווט לעמוד עם מזהה המוצר בתוך הכתובת
    navigate(`/productInfo/${id}`)
}
const addToCart =(p)=>{
  setCartProducts([...cartProducts,p])
  alert("added to cart!!")
setSum(prevSum => prevSum + p.price);
}
const logIn =  () => {
    alert("you first need to log in /sghin in")
    navigate('/Login');
  }
    return (
      <div className="products-container">
        
        {products.map(p => (
          <div className="product-card">
            <h3>{p.name}</h3>
            <img src={`/Pics/${p.image}`} alt={p.name} style={{ width: '150px', borderRadius: '8px' }} />
            <h6>Price: {p.price} ILS</h6>
            <h6>Amount of pieces: {p.amountOfPieces}</h6>
          <button onClick={() => handleMoreInfo(p.id)}>More info</button>
          <button onClick={currentUser==null?()=>logIn():() =>addToCart(p)} > Add to cart</button>
          </div>
        ))}
      </div>
    )
  }

  export default Products