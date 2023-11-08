import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    let [username,setUsername]=useState();
    let [password,setPassword]=useState();
    let [data,setData]=useState([])
    let navigate=useNavigate();
    useEffect(()=>{axios.get("http://localhost:3000/content")
                  .then((m)=>{
                      setData(m.data)
                      })
                    .catch()},[])
    let btn=(e)=>{
        e.preventDefault();
        const user = data.find((data) => {
            return data.username === username && data.password === password;});
          if (username===undefined&&password===undefined) {
            toast.warning("Please enter Username")
            toast.warning("Please enter password")}
          else if(username===undefined)
            toast.warning("Please enter Username")
          else if (password===undefined) 
            toast.warning("Please enter password")
          else if (user) {
            toast.success("successfully loggedin.")
            navigate(`/user/${user.id}`);
          } 
          else 
              toast.warning("You are enter wrong Username or Password")}
  return (<div className={styles['login-container']}>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={btn}>Login</button>
      </form>
      <p>
        Don't have an account? <Link to={"/create"}>Register here</Link>
      </p>
    </div>
  )
}
export default Login;