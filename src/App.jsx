import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AppRouter from './Component/AppRouter';
import MyContext from './context'; // אל תשכחי את זה!

//בשם ה' נעשה ונצליח!!!!!!!!!!!!!!!!!!!!!!!
function App() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Sara", password: "1234" ,role:"manager"},
    { id: 2, userName: "Yudit", password: "1234bB!" },
  ])
  const [currentUser, setCurrentUser] = useState(null);
  const store = {
    currentUser: currentUser,
    userList: users,
    name: users.userName,
    addUser: (user) => {
      setUsers([...users, user])
    },
    userLoggedIn: (user) => {
      setCurrentUser(user);
    }
  }
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSum] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Avocado",
      price: 54,
      amountOfPieces: 8,
      image: "AvokadoSweetPotatoCheese.jpg"
    },
    {
      id: 2,
      name: "Breaded",
      price: 64,
      amountOfPieces: 8,
      image: "Bredded.jpg"
    },
    {
      id: 3,
      name: "Combination",
      price: 250,
      amountOfPieces: 56,
      image: "Combination.jpg"
    },
    {
      id: 4,
      name: "Cucumber",
      price: 48,
      amountOfPieces: 8,
      image: "Cucumber.jpg"
    },
    {
      id: 5,
      name: "Niguir",
      price: 12,
      amountOfPieces: 1,
      image: "Niguir.jpg"
    }
  ])
  return (
    <MyContext.Provider value={store}>
      <AppRouter
        store={store}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        sum={sum}
        setSum={setSum}
        products={products}
        currentUser={currentUser}
        setProducts={setProducts}
      />
    </MyContext.Provider>
  );
}

export default App;
