import { createSlice } from '@reduxjs/toolkit';



export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'self-care', 'education', 'personal', 'entertainment', 'savings'];


const initialState = CATEGORIES.map(category => ({category: category, amount: 0, moneySpent: 0}))



export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {
    editBudget: (state, action) => {
      const newBudgets = state.map(budget=> {
        if (budget.category === action.payload.category) {
          return action.payload;
        } 
        return budget;
      })
      return newBudgets;
    }, 
    updatemoneySpent: (state, action) => {
     state.map(budget=> {
          if (budget.category === action.payload.category) {
           return  state.moneySpent += action.payload.amount;
          } 
          return budget;
        })
       
    }
  }
})
  

export const { editBudget, updatemoneySpent } = budgetsSlice.actions;


export const selectBudgets = (state) => state.budgets;


export default budgetsSlice.reducer;
