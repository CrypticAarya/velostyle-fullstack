import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase.from("products").select("*");
      if (error) console.error(error);
      else setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div>
      <h1>🚀 60-Minute Clothing Delivery</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
