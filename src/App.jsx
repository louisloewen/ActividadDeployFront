import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import List from "./components/List";
import Add from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

import useCount from "./hooks/useCount"; // o donde tengas definido useCount
import { getItems } from "./api/items"; // o donde tengas definido getItems
import ItemInfo from "./components/iteminfo"; // componente que falta


function App() {
  const { count, sum, resta } = useCount();
  let [items, setItems] = useState([]);
  let [isLogin, setIsLogin] = useState(false);
  
  useEffect(() => {
    if (isLogin) {
      getItems().then(data => {
        setItems(data.items || data); // ajusta según la estructura de tu API
      });
    }
  }, [isLogin]);
  
  
  // const sum = () => {
  //   setCount(count + 1);
  // };
  // const resta = () => {
  //   setCount(count - 1);
  // };
  const add = async (item) => {
    const token = localStorage.getItem("token");
    const result = await fetch("https://actreactangular-production.up.railway.app/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    const data = await result.json();
    setItems([...items, data.item]);
  };
  

  const del = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`https://actreactangular-production.up.railway.app/items${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    setItems(items.filter((item) => item.id !== id));
  };
  

  const login = async (user) => {
    const result = await fetch("https://actreactangular-production.up.railway.app/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
  
    const data = await result.json();
  
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    console.log(data.token)
    setIsLogin(data.isLogin); 
    return data.isLogin;
  };
  

  const setLogout = () => {
    setIsLogin(false)
    return false
  };
  return (
    <div>
      <BrowserRouter>
      {isLogin && <ResponsiveAppBar setLogout={setLogout}/>}
      <Routes>
        <Route path="/" element={<Login login={login}/>}/>
        <Route path="/add" element={<Add add={add} />}/>
        <Route path="/items" element={<List items={items} ondelete={del} />}/>
        <Route path="/items/:id" element={<ItemInfo items={items} />}/>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      {/* {count}
      <Boton name={"suma"} click={sum} />
      <Boton click={resta} name={"resta"} />
      <Boton name={"mensaje"} click={() => alert("hola")} /> */}
    </div>
  );
}

export default App;
