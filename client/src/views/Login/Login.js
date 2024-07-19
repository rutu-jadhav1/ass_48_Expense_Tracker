import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div>
      <h1 className="auth-heading">Login</h1>
      <form className="auth-form">
      <input 
          type="email" 
          placeholder="Enter Email" 
          className="user-input" 
         />
        <input 
          type="password"
          placeholder="Enter Password" 
          className="user-input" 
          />
          <button type='button' className='btn-auth'>Login</button>
      </form>
      <Link to='/signup' className='pg-link'>Don't have an account? Signup</Link>
     
    </div>
  )
}

export default Login