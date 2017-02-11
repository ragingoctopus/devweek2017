import Select from 'react-select';
import 'react-select/dist/react-select.css';
import React from 'react';

const TimeSelector = (props) => {
	const { options, logChange, value, name } = props
	return(
		<div>
			<Select 
				options={options} 
				onChange={logChange} 
				value={value} 
				name={name}
			/>
		</div>
	)
}

export default TimeSelector