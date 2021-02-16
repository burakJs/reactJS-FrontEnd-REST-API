import React, {useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';

function Main() {
  const [datas, setDatas] = useState({});
  const cookies = new Cookies();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(response => setDatas(response.data.products));
  }, [datas.length]);

  const deleteProduct = (productId) => {
    const token = cookies.get('token');

    axios.delete(`http://localhost:3000/products/${productId}`,
    {headers:{
      'Authorization':`Bearer ${token}`}})
    .then(res =>{
      console.log(res.data.message)
    })
    .catch(err =>{
      console.log(err.message)
    })

  }

    return (
      <div className="container">
        {Object.keys(datas).map((index) => (
             <div className="card" style={{'maxWidth': 35+'rem'}}>
             <img src={datas[index].productImage} className="card-img-top" alt='...'/>
             <div className="card-body text-center">
               <h5 className="card-title">{datas[index].name}</h5>
               <p className="card-text">Price: {datas[index].price}</p>
               <a href="#" className="btn btn-dark">Add to cart</a>
               <button className="btn btn-danger" onClick={() => deleteProduct(datas[index]._id)}>Delete Product</button>
             </div>
           </div>
          ))}
      
      </div>
    );
  }
  
  export default Main;
  