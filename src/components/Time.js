import React from 'react';
import TimeSelector  from './TimeSelector'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
	{ value: '3', label: '3' },
	{ value: '4', label: '4' },
	{ value: '5', label: '5' },
	{ value: '6', label: '6' },
	{ value: '7', label: '7' },
	{ value: '8', label: '8' },
	{ value: '9', label: '9' },
	{ value: '10', label: '10' },
	{ value: '11', label: '11' },
	{ value: '12', label: '12' },
]

const options2 = [
	{value: '00', label: '00' },
	{value: '30', label: '30'}
]
const options3 = [
     { value: 'AM', label: 'AM' },
     { value: 'PM', label: 'PM' }
]
function logChange(val) {
    console.log("Selected: " + val);
}
export default class Time extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { data, handleMenuSelect } = this.props;
		return (
			<div style={styles.mainStyle}>
					<TimeSelector
						handleMenuSelect={handleMenuSelect}
						options={options}
						value={data.hour}
						type={data.type}
						name="Hour"
					/>
					<div className="spacer">:</div>
					<TimeSelector
						handleMenuSelect={handleMenuSelect}
						options={options2}
						value={data.min}
						type={data.type}
						name="Min"
					/>
					<div className="spacer"></div>
					<TimeSelector
						handleMenuSelect={handleMenuSelect}
						options={options3}
						value={data['am/pm']}
						type={data.type}
						name="AM/PM"
					/>
			</div>
		)
	}
}

const styles = {
	mainStyle: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row'
	}
}