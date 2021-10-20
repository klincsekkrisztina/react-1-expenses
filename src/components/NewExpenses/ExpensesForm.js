import React, {useState} from "react";

import './ExpenesForm.css'

const ExpensesForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState();
    const [entredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnetredDate] = useState();

    // const [userInput, setUserInput] = useState(({
    //     enteredTitle: 'aa',
    //     entredAmount: 'aaa',
    //     enteredDate: 'aaa',
    // }))


    const titleChangerHandler = (event) =>{
       setEnteredTitle(event.target.value);
      //   setUserInput({
      //       ...userInput,
      //       enteredTitle: event.target.value
      //   })

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);

    };

    const dateChangeHandler = (event) => {
        setEnetredDate(event.target.value);
        console.log(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: entredAmount,
            date: new Date(enteredDate),
        };

        setEnteredTitle('');
        setEnteredAmount('');
        setEnetredDate('');

        props.onSaveExpensData(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangerHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.1'
                        value={entredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2021-10-10'
                        max='2023-01-01'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export  default  ExpensesForm;
