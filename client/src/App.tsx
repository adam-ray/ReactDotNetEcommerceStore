import { useEffect, useState } from "react";
// const express = require('express');
// const app = express();
// const cors = require("cors");
// app.use(cors());

function App() {

  
  const [products, setProducts] = useState([
    {name:'product1', price: 100.00},
    {name:'product2', price: 200.00}
  ]);

  //fetch allows us to access api, .then returns a promise, have to convert it to json
  //add dependency [] after comma(end of the callback function) so that this method only runs once when comp mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data=> setProducts(data))
  }, []);

  function addProduct() {
    setProducts(prevState =>[...prevState, {name:'product' + (prevState.length+1), price: 200.00}])
  }

  return (
    <div className="app">
      <h1>Re-Store</h1>
      <ul>
        {products.map((item, index)=> (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
