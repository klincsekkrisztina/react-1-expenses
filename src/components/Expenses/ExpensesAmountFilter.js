import React from "react";
import './ExpensesAmountFilter.css';

const ExpensesAmountFilter = (props) => {
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
		console.log(event.target.value)
	}

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by amount</label>
				<select value={props.selected} onChange={dropdownChangeHandler}>
					<option value= '<400'>under 400</option>
					<option value='>=400'>over 400</option>
				</select>
			</div>
		</div>
	);

}


export default ExpensesAmountFilter;