import React from "react";

export default function Form(props) {
	return (
		<div className='formInput'>
			<form>
				<label htmlFor='input'>New Task: </label>
				<input
					type='text'
					name='input'
					placeholder='Put something here'
					onChange={props.handleFormInput}
					value={props.formValue}
				/>
				<button onClick={props.handleSubmit}>Submit</button>
			</form>
		</div>
	);
}
