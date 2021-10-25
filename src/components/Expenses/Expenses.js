
import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesAmountFilter from './ExpensesAmountFilter';

import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [filteredAmount, setFilteredAmount] = useState('<400');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const amountFilterChangeHandler = (selectedAmount) => {
        setFilteredAmount(selectedAmount);
    }

    const filteredExpenses = props.items.filter((expense) => {
        if(filteredAmount === '<400')      
            return expense.date.getFullYear().toString() === filteredYear & expense.amount < 400;
        else
            return expense.date.getFullYear().toString() === filteredYear & expense.amount >= 400;

    });


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesAmountFilter
                    selected={filteredYear}
                    onChangeFilter={amountFilterChangeHandler}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;

// Filter külön komponensként, ami az összegre szűr rá (nagyobb vagy kisebb mint 400)