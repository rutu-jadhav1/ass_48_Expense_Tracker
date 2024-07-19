import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import 'react-router-dom'
import axios from 'axios'

import "./Home.css"
import TransactionCard from '../../components/TransactionCard/TransactionCard'

function Home() {
  const [user, setUser] = useState('')
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (currentUser) {
      setUser(currentUser)
    }

    if (!currentUser) {
      window.location.href = '/login'
    }
  }, [])

  const loadTransaction = async () => {
    if(!user._id){
      return
    }
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transactions?userId=${user._id}`)

    
    setTransactions(response.data.data)
  }

  useEffect(()=>{
    loadTransaction()
  },[user])
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

      {
        transactions.map((transaction) => {
          const {_id, title, amount, category, type, createdAt} = transaction
          return <TransactionCard
            key={_id}
            _id={_id}
            title={title}
            amount={amount}
            category={category}
            type={type}
            createdAt={createdAt}/>
        })
      }

      <Toaster />
    </div>
  )
}

export default Home