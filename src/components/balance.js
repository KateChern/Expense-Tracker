import React  from "react";
import { useSelector} from 'react-redux';
import { selectIncome } from '../features/incomeExpence/incomeExpenceSlice';
import sales from '../sales.jpeg';


export const Balance = () => {

    const income = useSelector(selectIncome);
    const balance = Number(income.income - income.expense).toFixed(2);

    const className = balance >= 0 ? 'positive' : 'negative'
    
    return (
        <div > 
      
        <div className='app-title'>
           
            <img src={sales}/>
        
            <h1 className='appName'>Expense Tracker</h1>
        </div>
        <div className = 'balance'>
        <div  className = 'balance-container'>
            <h4 className='your-balance'>Your Balance</h4>
            <div className = {className}>
                <h1 className =  "balance-value ">£{balance}</h1>
            </div>
            </div>
        </div>
        </div>
    )
}