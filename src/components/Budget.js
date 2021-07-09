import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editBudget} from '../features/budgets/budgetsSlice';
import { TransactionList } from './TransactionList';
import {selectFlattenedTransactions} from '../features/transactions/transactionsSlice'

export const Budget = ({budget}) => {
    
    const transactions = useSelector(selectFlattenedTransactions);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(budget.amount);
    
    const newValue = Number(amount) || 0;

    let list =  [];
    transactions.filter(tr => (tr.category === budget.category) ? list.push(tr): 0)

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editBudget({ category: budget.category, amount: newValue }));
        setAmount('');
    }
   

    let moneySpent = 0;
    list.map(tr => moneySpent += tr.amount )

    const calculateTotalExpenses = () => {
        if (list.map(t => (t.category === budget.category) )) {
            return  list.map(transaction => transaction.amount)
            .reduce((amount1, amount2) => amount1 + amount2, 0);
        }
     }
   
    
    const remainingFunds = Number.parseFloat(budget.amount - calculateTotalExpenses()).toFixed(2);
    const className = remainingFunds >= 0 ? 'positive' : 'negative';
     
    return (
        <li className='budget-container'>
            <div className='category-label'>Category</div>
            <div className='category-wrapper'>
                <h3 className='category-value'>{budget.category}</h3>
                <form onSubmit={handleEdit} className='budget-form'>
                    <input
                        className='amount-input'
                        value={amount}
                        onChange={(e) => setAmount(e.currentTarget.value)}
                        type='number'
                        step='0.1'
                    />
                    <button className='update-button'>Update</button>
                </form>
            </div>
           <div className='transactions-inBudget'>
            <TransactionList transactions={transactions} budget ={budget}/>
            </div>
            <h4 className= "funds-title">
                Funds Set: £{(budget.amount.toFixed(2))}
            </h4>
            <h4 className= "funds-title"> Total Spent: £{moneySpent.toFixed(2)}</h4>
            <div className= "funds-title">
                <h4 className=  {className}>
                    Funds Remaining: £{ remainingFunds }
                </h4>
            </div>          
        </li>
)
};


