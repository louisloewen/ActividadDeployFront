import React from "react";

  const [items, setItems] = useState([]);
  const getItems = async () => {
    const token = localStorage.getItem("token"); 
    try { 
      const result = await fetch("https://actreactangular-production.up.railway.app/items", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await result.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error("Error al obtener items:", error);
    }
  };
  const add = async (item) => {
    const token = localStorage.getItem("token");
    const result = await fetch("https://actreactangular-production.up.railway.app/items/", {
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
  