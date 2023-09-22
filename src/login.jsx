import Input from "./Input"
import { useState } from "react"
import {Link} from 'react-router-dom'
import {signInWithGooglePopup,createuserdocfromAuth,userDocRef, signinAuthUserWithEmailAndPassword} from './utils/firebase'
import "./login.css"


function Login() {

  
  const [contact, setcontact] =useState({
    email:'',
    password:''
  })
   const {email,password}= contact
   console.log(contact)

  async function handleClick(event)
  {
  
    try{
    const response = await signinAuthUserWithEmailAndPassword(email,password);
    console.log(response);
    history.push("/");
    } 
    catch(error){
    console.log('error in login', error.message)
    }
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
  <div className="Login">
    <div className="main">

      <div className="main2">
        <Link to="/signup" onClick={handleClick}>
          <button>Signup</button>
        </Link>
      </div>

      <p>Your Email</p>
      <Input
        name = 'email'
        type='email'
        placeholder='email'
        onChange ={handlepass}

        />

      <p>Your Password</p>
      <Input
        name= 'password'
        type='password'
        placeholder='password'
        onChange ={handlepass}
        />
 
      
      <Link to="/" onClick={handleClick}>
        <button>Login</button>
      </Link>  
    </div>
  </div>
)}
export default Login