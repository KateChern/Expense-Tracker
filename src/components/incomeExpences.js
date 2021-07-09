import React, { useState } from 'react';
import { updateIncome } from '../features/incomeExpence/incomeExpenceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectIncome } from '../features/incomeExpence/incomeExpenceSlice';
import { selectBudgets } from '../features/budgets/budgetsSlice';

export function IncomeExpences () {
  
    const dispatch = useDispatch();
    const income = useSelector(selectIncome)
   
    const budgets = useSelector(selectBudgets);
    
    let totalSet = 0;
    budgets.map(b=> totalSet += b.amount)


    const [amount, setAmount] = useState([]);
    
    const newValue = Number(amount) || 0;
    const newExpense = Number.parseFloat(income.expense).toFixed(2);
    const HandleUpdateIncome = (e) => {
        e.preventDefault();
        dispatch(updateIncome(newValue));
        setAmount('');
    }
    
    


    return (
        <div className="balance-income-expense">
            <div className="income-exp-container">
           
            <div className="income-borders">
                <div>
                    <h4>Income</h4>
                    <p 
                    className="money-plus">+£{income.income.toFixed(2)} 
                    </p>
                </div>
              <div className="input-form">
                    <input
                    className='income'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    
                    />
                    <button
                    className='income-button'
                    onClick={HandleUpdateIncome}
                    
                    >
                    Update Income
                    </button>
                </div>
                {/* <p>Total funds set: £{totalSet}</p> */}
    
            </div>
            <div className="expense-borders">
               
                    <h4>Expense</h4>
                    <p className="money-minus">£{newExpense}</p>
                
            </div>
        </div>
        </div>
    )
}


