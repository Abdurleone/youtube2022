import { Link } from "react-router-dom";
import { useState } from "react"
import axios from "axios"
import "./register.scss";

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
  })
  const [err, setErr] = useState(false)

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  const handleClick = async e=>{
    e.preventDefault()

    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
    } catch (err){
      setErr(true)
    }
  }

  console.log(err)

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Abdurleone Social.</h1>
          <p>
            Welcome to abdurleone social
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" email="email" onChange={handleChange}/>
            <input type="password" placeholder="Password" password="password" onChange={handleChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
