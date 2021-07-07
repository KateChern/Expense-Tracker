import React from 'react' ;
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import { selectBudgets } from '../features/budgets/budgetsSlice';
import {useSelector} from 'react-redux';
import {selectFlattenedTransactions} from '../features/transactions/transactionsSlice'

export const Chart = ({budget}) => {
    const budgets = useSelector(selectBudgets);
    const transactions = useSelector(selectFlattenedTransactions);

    let list =  [];
    budgets.map( budget => 
    transactions.filter(tr => (tr.category === budget.category) ? list.push(tr): 0));
    
    let moneySpent = 0;
    list.map(tr => moneySpent += tr.amount )
    console.log(list)
    console.log(moneySpent)

    const data = {
        labels:  list.map(b => b.category),
        datasets: [
          {
            label: '£ Spent',
            data: list.map(tr => tr.amount + tr.amount),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
        position: 'left',
      };
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          position: 'right'
        
        }
      }
     
    return (
        <div className="chart">
           <Doughnut data={data}  options={options}/>

        </div>
    )
}