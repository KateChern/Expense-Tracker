import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
    addTransaction, CATEGORIES
} from '../features/transactions/transactionsSlice';
import { v4 as uuidv4 } from 'uuid';
import { updatemoneySpent} from '../features/budgets/budgetsSlice';
import {updateExpense} from '../features/incomeExpence/incomeExpenceSlice'  

export const TransactionForm = () => {
   
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch();
   

    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTransaction({
            description: description,
            category: category,           
            amount: Number(amount),
            id: uuidv4()
        }));
        dispatch(updateExpense(newAmount));
        dispatch(updatemoneySpent(newAmount));
        setDescription('');
        setAmount(0);
        setCategory(CATEGORIES[0]);
    }
    
    
    const newAmount = Number(amount) || 0;
   
    return (
        <div className="new-transaction" >
            <h2 className="newTransaction">New Transaction</h2>
            <form onSubmit={handleSubmit} className="transaction-form">
                <div className="form-wrapper">
                    <div className='input-section'>
                        <label htmlFor="categories">Category</label>
                        <select className='input-transaction'
                            id="categories" 
                            value={category}
                            onChange ={(e) => setCategory(e.target.value)} >
                            {CATEGORIES.map((c)=> (
                                <option key ={c} value={c}>
                                    {c}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className='input-section'>
                        <label htmlFor="description">Description</label>
                        <input className='input-transaction'
                            required
                            id='description' 
                            value = {description}
                            type="text"
                            onChange= {(e) => setDescription(e.target.value) }
                            />
                        
                    </div>
                    <div className='input-section'>
                        <label htmlFor="amount">Amount</label>
                        <input className='input-transaction'
                            id='amount'
                            type="number" 
                            value={amount}
                            onChange= {(e) => setAmount(e.target.value) }
                        />
                    </div>
                </div>
                <button className="addButton" >Add Transaction</button>
            </form>
        </div>
    )
}