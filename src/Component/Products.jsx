import React, { useContext, useState } from 'react'
import ProductInfo from './ProductInfo'
import { useNavigate } from 'react-router-dom'
import MyContext from '../context';
const Products = ({ products, setCartProducts, cartProducts, setSum, sum, setProducts }) => {
  const navigate = useNavigate()
  const currentUser = useContext(MyContext).currentUser;
  const handleMoreInfo = (id) => {
    // נווט לעמוד עם מזהה המוצר בתוך הכתובת
    navigate(`/productInfo/${id}`)
  }
  const addToCart = (p) => {
    setCartProducts([...cartProducts, p])
    alert("added to cart!!")
    setSum(prevSum => prevSum + p.price);
  }
  const logIn = () => {
    alert("you first need to log in /sghin in")
    navigate('/Login');
  }
  const deleteItem = (id) => {
    const filtered = products.filter(p => p.id !== id);
    setProducts(filtered);

  }
  const [selectedProduct, setSelectedProduct] = useState(null);

  const setItem = (id) => {
    const product = products.find(p => p.id === id);
    setSelectedProduct(product);
  };

  const saveChanges = () => {
    const updated = products.map(p =>
      p.id === selectedProduct.id ? selectedProduct : p
    );
    setProducts(updated);
    setSelectedProduct(null); // סגור את הטופס
  };
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: '', name: '', price: '', amountOfPieces: '', image: ''
  });

  const addItem = () => {
    const newItem = {
      name: newProduct.name,
      price: newProduct.price,
      amountOfPieces: newProduct.amountOfPieces,
      image: "default.jpg", // תמונה קבועה
      id: products.length + 1
    };
    setProducts([...products, newItem]);
    setNewProduct({ name: "", price: "", amountOfPieces: "" });
  };

  const saveNewItem = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.amountOfPieces) {
      alert("Please fill all fields");
      return;
    }

    const nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;

    const productToAdd = {
      ...newProduct,
      id: nextId,
      price: +newProduct.price,
      amountOfPieces: +newProduct.amountOfPieces,
      image: "default.jpg"  // קבע את שם הקובץ הקבוע
    };

    setProducts([...products, productToAdd]);
    setNewProduct({ id: '', name: '', price: '', amountOfPieces: '' }); // אין צורך באיפוס image
    setShowAddForm(false);
    alert("Product added!");
  };

  return (
    <div className="products-container">

      {products.map(p => (
        <div className="product-card">
          <h3>{p.name}</h3>
          <img src={`/Pics/${p.image}`} alt={p.name} style={{ width: '150px', borderRadius: '8px' }} />
          <h6>Price: {p.price} ILS</h6>
          <h6>Amount of pieces: {p.amountOfPieces}</h6>
          <button onClick={() => handleMoreInfo(p.id)}>More info</button>
          <button onClick={currentUser == null ? () => logIn() : () => addToCart(p)} > Add to cart</button>
          {currentUser?.role === "manager" && <>
            <button onClick={() => deleteItem(p.id)} > Delete item</button>
            <button onClick={() => setItem(p.id)} > Set item</button>
            <button onClick={() => setShowAddForm(true)}>+ Add New Product</button></>}
        </div>
      ))}
      {selectedProduct && (
        <div className="edit-form">
          <h3>Edit {selectedProduct.name}</h3>
          <input
            type="text"
            value={selectedProduct.name}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, name: e.target.value })
            }
          />
          <input
            type="number"
            value={selectedProduct.price}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, price: +e.target.value })
            }
          />
          <input
            type="number"
            value={selectedProduct.amountOfPieces}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, amountOfPieces: +e.target.value })
            } />
          <button onClick={() => saveChanges()}>Save</button>
        </div>
      )}
      {showAddForm && (
        <div className="edit-form">
          <h3>Add New Product</h3>
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Amount of Pieces"
            value={newProduct.amountOfPieces}
            onChange={(e) => setNewProduct({ ...newProduct, amountOfPieces: e.target.value })}
          />
          <button onClick={saveNewItem}>Save</button>
        </div>
      )}
    </div>
  )
}

export default Products