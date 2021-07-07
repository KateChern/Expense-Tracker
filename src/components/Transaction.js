import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../features/transactions/transactionsSlice';
import { deleteExpense} from '../features/incomeExpence/incomeExpenceSlice'



export function Transactions({ transaction}) {
  const dispatch = useDispatch();


  const handleDelete = (e) => {
    dispatch(deleteTransaction(transaction));
    dispatch(deleteExpense(transaction.amount)) ;
  };

  function ShowTransaction() {
      return (
        <li className="new-transaction">
            <span>
                 £{transaction.amount} – {' '}
                <span className="description">{transaction.description} </span>
            </span>
            <button onClick={handleDelete} aria-label="Remove" className="removeButton">
            X
            </button>
         </li>
      )
  }


  return (
      <div >
          <div > </div>
        {<ShowTransaction  /> }
      </div>
    
  );
}


