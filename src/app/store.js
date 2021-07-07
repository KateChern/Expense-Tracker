import { configureStore } from '@reduxjs/toolkit';
import budgetsReducer from '../features/budgets/budgetsSlice';
import incomeReducer from '../features/incomeExpence/incomeExpenceSlice';
import transactionReducer from '../features/transactions/transactionsSlice'

export const store = configureStore({
  reducer: {
    budgets: budgetsReducer,
    income: incomeReducer,
    transactions: transactionReducer
  },
});
