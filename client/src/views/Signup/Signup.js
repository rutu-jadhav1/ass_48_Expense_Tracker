import React, { useState } from 'react'
import axios from 'axios'
import 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'



function Signup() {
  const [user, setUser] = useState({
    fullName : '',
    email : '',
    password : '',
    dob : ''
  })
  const signup_btn = async () =>{
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
      fullName : user.fullName,
      email : user.email,
      password : user.password,
      dob : user.dob
    })

    if(response.data.success){
      toast.success(response.data.message)
      setUser({
        fullName : '',
        email : '',
        password : '',
        dob : ''
      })
    }
    else{
      toast.error(response.data.message)
    }

    console.log(response)
  }

  return (
    <div>
      <h1 className="auth-heading">User Registration</h1>

      <form className="auth-form">
        <input
          type="text"
          placeholder="Enter Full Name" 
          className="user-input" 
          value={user.fullName} 
          onChange={(e) => setUser({...user, fullName : e.target.value})  }
        />
        <input 
          type="email" 
          placeholder="Enter Email" 
          className="user-input" 
          value={user.email}
          onChange={(e) => setUser({...user, email : e.target.value})  }
        />
        <input 
          type="password"
          placeholder="Enter Password" 
          className="user-input" 
          value={user.password}
          onChange={(e) => setUser({...user, password : e.target.value})  }
        />
        <input 
          type="date" 
          placeholder="Date of Birth" 
          className="user-input" 
          value={user.dob}
          onChange={(e) => setUser({...user, dob : e.target.value})  }
        />

        <button 
          type="button" 
          className="btn-auth"
          onClick={signup_btn}>
            Register
        </button>
      </form>
      <Link to='/login' className='pg-link'>Already have an account? Login</Link>
      <Toaster/>
    </div>
  )
}

export default Signup