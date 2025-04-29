import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 3 }
  ]);

  const addProduct = () => {
    if (productName && productPrice) {
      const newProduct = {
        id: products[products.length - 1].id + 1,
        name: productName,
        price: productPrice
      };
      setProducts([...products, newProduct]);
      setProductName("");  
      setProductPrice(""); 
    }
    else {
      alert("Please enter both product name and price");
    }
  };
  const deleteItem = (id) => {
    const index = products.findIndex(p => p.id === id);
    const modifiedArr = [...products];
    modifiedArr.splice(index, 1);
    setProducts(modifiedArr);
  }

  const addToCart = (product) => {
    const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  }
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };
  const placeOrder = () => {
    alert("your order has been placed!");
  };
  return (
    <div className="App">

      <h1>Super market</h1>

      <div className="productsList">
        {
          products.map(p => <div className="product">
            <h4>{p.name}</h4>
            <p>{p.price} ש"ח</p>
            <button onClick={() => { addToCart(p) }}>add to cart</button>
            <button onClick={() => { deleteItem(p.id) }}>delete</button>
          </div>
          )
        }
      </div>
      <form className="addPro">
        <h2>add product</h2>
        <input onChange={(event) => { setProductName(event.target.value) }} value={productName} placeholder="Product name" />
        <input onChange={(event) => { setProductPrice(parseInt(event.target.value)) }} value={productPrice} placeholder="Product price" />
        <button type="button" onClick={addProduct}>add product</button>
      </form>
      <div className="cart">
        <h1>my cart</h1>
        <hr />
        <ul>
          {cart.map((item, index) => <li key={index}>{item.name} - {item.price} ש"ח
            <button onClick={() => removeFromCart(item.id)}>Remove</button></li>)}
        </ul>
        <button onClick={placeOrder}>place order</button>
      </div>
    </div>
  );
}

export default App;
