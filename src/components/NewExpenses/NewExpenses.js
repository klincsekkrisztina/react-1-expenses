import React from "react";

import ExpensesForm from './ExpensesForm';
import './NewExpenes.css'

const NewExpenses = (props) => {
    const onSaveExpenseDataHandler = (enteredExpensesData) => {
        const expenseData = {
            ...enteredExpensesData,
            id: Math.random().toString()
        }

        console.log(expenseData);
        props.onAddNewExpensess(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpensesForm onSaveExpensData={onSaveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpenses;
