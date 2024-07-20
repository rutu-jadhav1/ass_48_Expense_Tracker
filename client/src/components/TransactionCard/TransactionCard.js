import React from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import "./TransactionCard.css"

function TransactionCard({_id, title, amount, category, type, createdAt, loadTransaction}) {

  const deleteTransaction = async () => {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/transaction/${_id}`)
    
      toast.success('Transaction deleted successfully');
      loadTransaction();
    }
  return (
    <div className='transaction-card'>
        <h1 className='transaction-card-title'> {title}</h1>

        <span className='transaction-card-date'>
          {new Date(createdAt).toLocaleString()}
        </span>

        <span className='transaction-card-category'>
          {category}
        </span>

        <span className='transaction-card-amount'style={{
          color : type === "credit" ? "green" : "red"
        }}>
          {type === "credit" ? "+" : "-"}
          {amount}
        </span>

        <button type='button' className='transaction-delete-btn' onClick={deleteTransaction}>Delete</button>
        <Toaster/>
    </div>
  )
}

export default TransactionCard