
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    income : 0,
    expense: 0
};

export const incomeExpensesSlice = createSlice ({
    name: 'incomeExpenses',
    initialState,
    reducers: {
        updateIncome: (state, action) => {           
            state.income = action.payload; 
    },
        updateExpense: (state, action) => {

            state.expense += action.payload;
          
        },
        deleteExpense: (state, action) => {
            state.expense -= action.payload;
        }
        
    }
}) ;

export const {updateIncome, updateExpense, deleteExpense} = incomeExpensesSlice.actions;
export const selectIncome = (state) => state.income;
export const selectExpense = (state) => state.expense;
export default incomeExpensesSlice.reducer;