import React from 'react';

import {Transactions}  from './Transaction'

export const TransactionList = ({transactions, budget}) => {
 
    let list =  [];
 transactions.filter(tr => (tr.category === budget.category) ? list.push(tr): 0)


    return (
        <section>
            <h2 className='transaction-label'>Transactions: </h2>
            <ul className="new-transaction-list">
            {list.map((t) => (
                 
          <Transactions budget= {budget} transaction={t} key={t.id} />
        ))
             }
            </ul>
        </section>
    )
}



























