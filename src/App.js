import React from 'react';
import { Chart } from './components/Chart';
import { Budgets } from './features/budgets/Budgets';
import { Balance} from "./components/balance";
import { IncomeExpences} from "./components/incomeExpences";
import {TransactionForm} from '../src/components/TransactionForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                
        <div  className='app-main-container'>
          <div className ="container">
            <Balance />
          </div>
          <div className='income-transaction-container'>
            <IncomeExpences />
            <Budgets />
            <div className='chartComponent'>
              <Chart />
            </div>
            <TransactionForm />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
