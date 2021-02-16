import React, {useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';

function CreateProduct(){
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [file,setFile] = useState('');
    const [result,setResult] = useState();
    const cookies = new Cookies();

    const save = () => {
        
        const token = cookies.get('token',[])

        const form = new FormData();
        form.append('name',name);
        form.append('price',price);
        form.append('productImage',file);

        axios.post('http://localhost:3000/products',
            form,
            {headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':`Bearer ${token}`
            },
        }
        ).then(res =>{
            setResult(res)
        }).catch(err => {
            console.log(err)
        })

    }

    return(
        <div className="container">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input onChange={e => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input onChange={e => setPrice(e.target.value)} type="number" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Product Image</label>
                <input onChange={e => setFile(e.target.files[0])} type="file" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button  onClick={save} className="btn btn-primary">Submit</button> 
        </div>
    )
}

export default CreateProduct;