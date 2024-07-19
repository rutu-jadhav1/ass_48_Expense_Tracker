import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import "./Home.css"

function Home() {
  const [user, setUser] = useState('')

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (currentUser) {
      setUser(currentUser)
    }

    if (!currentUser) {
      window.location.href = '/login'
    }
  }, [])
  return (
    <div>
      <h1 className="home-heading">Hello {user.fullName} 👋</h1>
      <h2 className="home-heading">Welcome to Expense Tracker</h2>

      <span className='home-logout' onClick={() => {
        localStorage.clear()
        toast.success(`Logged out successfully`)

        setTimeout(() => {
          window.location.href = '/login'
        }, 3000)
      }}>Logout</span>

      <Toaster />
    </div>
  )
}

export default Home