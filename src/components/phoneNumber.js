import React, {useState} from 'react';

export default function PhoneNumberInput() {
	const [inputValue, setInputValue] = useState('');
	const handleInput = (e) => {
		const phoneFormat = formatPhone(e.target.value);
		setInputValue(phoneFormat);
	};
	return <input onChange={e => handleInput(e)} value={inputValue} />;


}

function formatPhone(value) {
	if (!value) return value;

	const phoneNumber = value.replace(/[^\d]/g,"");
	const phoneNumberLength = phoneNumber.length;
	if (phoneNumberLength < 4) return phoneNumber;
	if (phoneNumberLength < 7) {
		return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
	}
	return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6,)}-${phoneNumber.slice(6,10)}`;
}


