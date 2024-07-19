import React from 'react'

import "./AddTransaction.css"

function AddTransaction() {
  return (
    <div>
        <h1 className="auth-heading">Add Transaction</h1>
        <form className="auth-form">
        <input
          type="text"
          placeholder="Enter Title"
          className="user-input"
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="user-input"
        />
        <select className='user-input'>
            <option value='credit'>Income</option>
            <option value='debit'>Expense</option>
        </select>
        <select className='user-input'>
            <option value="food">Food</option>
            <option value="expense">Expense</option>
            <option value="rent">Rent</option>
            <option value="utilities">Utilities</option>
            <option value="transportation">Tranportation</option>
            <option value="learning">Learning</option>
            <option value="entertainment">Entertainment</option>
            <option value="clothing">Clothing</option>
            <option value="health">Health</option>
            <option value="salary">Salary</option>
        </select>
    
        <button type='button' className='btn-auth'>
            Add Transaction
        </button>
        </form>
    </div>
  )
}

export default AddTransaction