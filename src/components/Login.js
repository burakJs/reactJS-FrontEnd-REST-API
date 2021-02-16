import React, {useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';

//http://localhost:3000/user/signin

function Login(){
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [data,setData] = useState({});
    const cookies = new Cookies();

    const signin = async() => {
        await axios
            .post("http://localhost:3000/user/signin",
                {email:mail,password:pass},
                {headers:{'Content-Type':'Application/json'}})
            .then(response => setData(response.data))
            .catch(err => console.log(err))

        cookies.set('token',data.token,[]);
    }

    const deneme = () => {
        console.log(cookies.get('token',[]));
    }

    return(
        <div className="container text-center">
            <button className="btn btn-success" onClick={deneme}>Deneme Butonu</button>

                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input onChange={e => setMail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input onChange={e => setPass(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>

                <button onClick={signin} className="btn btn-dark">Submit</button>

        </div>
    )
}

export default Login;