import useState from 'react'
import "./Signup.css"

function Signup() {
 

  return (
    <div>
      <h1 className="signup-heading">User Registration</h1>

      <form className="signup-form">
        <input type="text" placeholder="Enter Full Name" className="user-input"/>
        <input type="email" placeholder="Enter Email" className="user-input"/>
        <input type="password" placeholder="Enter Password" className="user-input"/>
        <input type="date" placeholder="Date of Birth" className="user-input"/>

        <button type="button" className="btn-auth">Register</button>
      </form>
    </div>
  )
}

export default Signup