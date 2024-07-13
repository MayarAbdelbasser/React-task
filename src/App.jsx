import { useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCart/ProductCard";
import { useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
    console.log(data);
  }, []);
  return data.map((product) => {
    return (
      <ProductCard
        key={product.id}
        title={product.title}
        thumbnail={product.thumbnail}
        description={product.description}
        price={product.price}
        discountPercentage={product.discountPercentage}
      />
    );
  });
};
function App() {
  return (
    <>
      <div className="header">
        <h1>Our Products</h1>
        <span></span>
      </div>
      <div className="product-container">
        <Fetch />
      </div>
    </>
  );
}

export default App;
