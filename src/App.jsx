import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //יצרנו מערך מוצרים
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 5, img: "apple.png" },
    { id: 2, name: "Banana", price: 6, img: "banana.png" },
    { id: 3, name: "Carrot", price: 4, img: "carot.png" }
  ]);
  const [filterdProduct, setFilterdProduct] = useState(products);
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [cart, setCart] = useState([]);
  const sumCart = cart.length;
  const [searchVal, setSearchVal] = useState("");
  const [time, setTime] = useState("morning!");
  const [user, setUser] = useState("manager");
  const addToCart = (p) => {
    setCart([...cart, p])
  }
  //פעולה שמוסיפה מוצר בתפריט ראשי
  const addProduct = () => {
    //מגדירה מוצר חדש
    const newProduct = {
      // האחרון שבמערך מוסיפה לו אחד ככה שנדע מה יהיה לפריט החדשidלוקחת את ה
      id: products.length ? products[products.length - 1].id + 1 : 1,
      // in the input השם שהכניסו
      name: nameValue,
      // in the input המחיר שהכניסו
      price: priceValue,
      //תמונה שהיא דיפולט
      img: "defualt.png"
    }
    //יוצרת מערך חדש שבו אני מכניסה את המוצרים שהיה לי במערך ומוסיפה לו את הפריט החדש
    const updatedProducts = [...products, newProduct];
    //מעדכנת את המערך הישן של המוצרים במערך החדש שהכנתי
    setProducts(updatedProducts);
    //מעדכנת את המערך של החיפוש גם במערך החדש
    setFilterdProduct(updatedProducts); 
    setNameValue("");
    setPriceValue("");
    setSearchVal("");
  }
  //פעולה שמוחקת מוצר מהתפריט ראשי
  const deleteItem = (id) => {
    //  שהוא קיבל בפונקתיה idמערך חדש שבו אני מכניסה את כל המוצרים שא שווים ל
    const updatedPrudocts = products.filter(p => p.id !== id);
    //מעדכנת את מערך המוצרים במערך החדש שבו מחקתי את המוצר
   setProducts(updatedPrudocts);
    //מעדכן את המערך של הסינון 
    setFilterdProduct(updatedPrudocts);
  }
 //פונקציה שמוחקת מהמערך של הסל
  const deleteItemFromCart = (id) => {
    //  שהוא קיבל בפונקתיה idמערך חדש שבו אני מכניסה את כל המוצרים שלא שווים ל
    const updatedCart = cart.filter(p => p.id !== id);
    //מעדכנת את מערך של הסל במערך החדש שבו מחקתי את המוצר
    setCart(updatedCart);
  }
  //פונקציית חיפוש
  const search = (txt) => {
    setSearchVal(txt);
    if (txt === "") {
      // אם שדה החיפוש ריק, תחזיר את כל המוצרים שנמצאים במערך 
      setFilterdProduct(products);
    } else {
      const filteredArr = products.filter(p =>
        p.name.toLowerCase().includes(txt.toLowerCase()) ||
        p.price.toString().includes(txt)
      );
      setFilterdProduct(filteredArr);
    }
  };
  const placed = () => {
    sumCart != 0 ?
      alert("your order has been placed!😊") :
      alert("your cart is empty!😒")
  }
  return (
    <div className="App">
      <h1>HI!! {time == "morning" ? "Good morning!!😁" : time == "noon" ? "Good after noon!!😊" : "Good night!!😴💤"}</h1>
      <div className="hi">
        <button onClick={() => setTime("morning")}>Morning</button>
        <button onClick={() => setTime("noon")}>Evening</button>
        <button onClick={() => setTime("night")}>Night</button>
      </div>
      <form>
        <div className="search-container">
          <input
            type="text"
            id="search"
            placeholder="Search product by name or price..."
            onChange={(event) => search(event.target.value)}
            value={searchVal}
          />
        </div>
      </form>
      <div className="useres" >
        <button onClick={() => setUser("manager")}>manager</button>
        <button onClick={() => setUser("user")}>user</button>
      </div>
      <header><h1>Super market</h1></header>
      <div className='productsList'></div>
      {user == "manager" && <a>add item to store</a>}

      {filterdProduct.map(p => <div className="product" style={{ color: p.price <= 200 ? "orange" : "green", backgroundColor: p.price < 5 ? "white" : "lightblue" }}>

        <h4>{p.name}</h4>
        <img src={p.img} alt={p.name} width="100" />
        <p>{p.price} ש"ח</p>
        <button onClick={() => { addToCart(p) }}>Add to cart</button>
        <button onClick={() => { deleteItem(p.id) }}>Delete item</button>
      </div>)}
      {
        user == "manager" &&
        <form className="addPro">
          <h2>Add product</h2>
          <input id="proName" placeholder="Enter product name" onChange={(event) => { setNameValue(event.target.value) }} value={nameValue} />
          <input placeholder="Enter product price" onChange={(event) => { setPriceValue(parseInt(event.target.value)) }} value={priceValue} />
          <button type="button" onClick={() => { addProduct() }}>Add item</button>
        </form>
      }

      <div className="cart">
        <h2>your cart</h2>
        <ul>
          {
            cart.length == 0 ?
              <p>your cart is empty come on atart shopping</p>
              :
              cart.map(p => <li>
                <h5>{p.name} : {p.price} ש"ח </h5> <img src={p.img} alt={p.name} width="80" /><button onClick={() => deleteItemFromCart(p.id)}>Remove</button>
              </li>)
          }
        </ul>
        <h4>you have {sumCart} items in your cart </h4>
        <button onClick={() => { placed() }}>Place your order</button>
      </div>
    </div>
  );
}

export default App;
