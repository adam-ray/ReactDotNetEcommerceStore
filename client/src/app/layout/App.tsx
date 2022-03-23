import { useEffect, useState } from "react";
import Catalog from "../../features/Catalog";
import { Product } from "../models/products";
// const express = require('express');
// const app = express();
// const cors = require("cors");
// app.use(cors());

function App() {

  //useState is on the typescript intergace Product
  const [products, setProducts] = useState<Product[]>([]);

  //fetch allows us to access api, .then returns a promise, have to convert it to json
  //add dependency [] after comma(end of the callback function) so that this method only runs once when comp mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data=> setProducts(data))
  }, []);

  function addProduct() {
    setProducts(prevState =>[...prevState, 
      {
        id: prevState.length+101,
        name:'product' + (prevState.length+1), 
        price: 200.00,
        brand: 'some brand',
        description: 'some description',
        pictureUrl:'http://picsum.photos/200'
      }])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <Catalog products={products} addProduct={addProduct}/>
      
    </div>
  );
}

export default App;
