import Select from 'react-select';
import 'react-select/dist/react-select.css';
import React from 'react';
import '../App.css';

const TimeSelector = (props) => {
	const { options, handleMenuSelect, value, name, type } = props
	return(
		<div className='time_selector'>
			<Select 
				options={options} 
				onChange={(e) => handleMenuSelect( e.value , name, type )} 
				value={value} 
				name={name}
			/>
		</div>
	)
}

export default TimeSelector