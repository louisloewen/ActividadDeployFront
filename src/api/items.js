export const getItems = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://actreactangular-production.up.railway.app/items", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching items:", error);
      return [];
    }
  };