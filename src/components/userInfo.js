import phoneNumberInput from "./phoneNumber";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

function userInfo() {
	
	/*const [firstName, setFirstName] = useState('');
	const [middleInt, setMiddleInt] = useState('');
	const [lastName, setLastName] = useState('');
	const [yearsExp, setYearsExp] = useState(0);
	const [phone, setPhone] = useState(0);
	const [currentPos, setCurrentPos] = useState('');
	const [email, setEmail] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);
	*/
	/*const [addNewForm, setAddNewForm] = useState({
		firstName: '',
		middleInt: '',
		lastName: '',
		phone: '',
		email: '',
		yearsExp: '',
		currentPos: '',
		selectedFile: '',

	});
	const handleFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');
		const fieldValue = event.target.value;

		const newFormData = { ...addNewForm};
		newFormData[fieldName] = fieldValue;

		setAddNewForm(newFormData);
	}		

	const handleFormSubmit = (event) => {
		event.preventDefault();
		
		const newContact = {
			id: nanoid(),
			firstName: addNewForm.firstName,
			middleInt: addNewForm.middleInt,
			lastName: addNewForm.lastName, 
			phone: addNewForm.phone,
			email: addNewForm.email
			yearsExp: addNewForm.yearsExp,
			currentPos: addNewForm.currentPos,
			selectedFile: addNewForm.selectedFile
		}

		
	}

*/

	return (
		<div>hello</div>
	/*	<form onSubmit={handleFormSubmit}>
			<h1>New Applicant Information</h1>
			<label>
				First name:
				<input 
					placeholder="First name..."
					type="text"
					name="firstName"
					required="required"
					onChange={handleFormChange} />
			</label>
			<label>
				Middle Initial:
				<input 
					placeholder="Middle initial..."
					type="text"
					name="middleInt"
					required="required"
					onChange={handleFormChange} />
			</label>
			<label>
				Last name:
				<input 
					placeholder="Last name..."
					type="text"
					name="lastName"
					required="required"
					onChange={handleFormChange} />
			</label>
			<label>
				Phone number:
				<input
					placeholder="Phone number..."
					type="text"
					name="phone"
					required="required"
					onChange={handleFormChange}
					NOT SURE IF I SHOUDL USE THE PHOEN NUMBER FUNCITON THAT I CREATED  />
			</label>
			<label>
				Email:
				<input 
					placeholder="Email..."
					type="email"
					name="email"
					required="required"
					onChange={handleFormChange} />
			</label>
			<label>
				Years of experience:
				<input 
					placeholder="Enter years..."
					type="number"
					name="yearsExp"
					onChange={handleFormChange} />
			</label>
			<label>
				Current position:
				<input 
					placeholder="Current Position..."
					type="text"
					name="currentPos"
					onChange={handleFormChange} />
			</label>
			
			<label>
				Resume File:
				<input 
					placeholder="Select a file..."
					type="file"
					name="selectedFile"
					required="required"
					onChange={e => setSelectedFile(e.target.files[0])} />
			<label>
			<button type="submit">Add</button>
	</form>*/
		
	);
}

export default userInfo;