export const getItems = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://actreactangular-production.up.railway.app/items/", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };