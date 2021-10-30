import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "product1", price: 100.0 },
    { name: "product2", price: 200.0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts([...products, { name: "product3", price: 300.0 }]);
  }

  return (
    <div className="app">
      <h1>Re-Store </h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;
