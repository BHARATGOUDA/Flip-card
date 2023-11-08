import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Register = () => {
  const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/content")
        .then((m)=>{
            setData(m.data)
            })
      },[])
  let handleRegister=(e)=>{
    e.preventDefault()
    const user = data.find((data) => {
      console.log(data.username);
        return data.username === username && data.password === password;
    });
    if (username===""&&password===""&&confirmPassword==="") {
      toast.warning("Please enter Username");
      toast.warning("Please enter Password");
      toast.warning("Please enter ConfirmPassword");
    }
    else if (username===undefined||username===""||username==null) 
    {
      toast.warning("Please enter Username");
  }
    else if (password===undefined||password===""||password==null) 
    {
      toast.warning("Please enter Password");
  }
    else if (confirmPassword===undefined||confirmPassword===""||confirmPassword==null) 
  {
    toast.warning("Please enter ConfirmPassword");
  }
    else if(password!==confirmPassword)  {
      toast.warning("password and confirmPassword are diffrent")
  }
    else if (user) 
    {
      toast.warning("User already Exist")
    }
    else{
      let a={username,password,confirmPassword}
      axios.post("http://localhost:3000/content",a)
      setTimeout(()=>{ window.location.reload(navigate("/"))},6000)
      toast.success("Register successfully")
    }
  }
  return (
    <div className={styles['register-container']}>
      <h2>Register</h2>
      <form>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" onClick={handleRegister}>Register</button>
      </form>
      <p>
        Already have an account?<Link to="/">Login here</Link>
      </p>
    </div>
    )
}
export default Register;