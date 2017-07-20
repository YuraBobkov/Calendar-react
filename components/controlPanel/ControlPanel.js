import React from 'react';
import ControlPanelMonth from './ControlPanelMonth';
import basicColors from '../data/styleData';

const styles = {
	control: {
		padding: '5px',
		textAlign: 'center'
	},
       
	getToday: {
		border: '1px solid ' + basicColors.mainColor,
		background: '#F8F8F8',
		borderRadius: '20px',
		color: basicColors.mainColor,
		cursor: 'pointer',
		display: 'inline-block',
		marginRight: '30px',
		padding: '10px 15px'
	}
}


const ControlPanel = (props) => {
	return (
		<div style = {styles.control}>
            <button type = "button" style = {styles.getToday} onClick = {props.getToday} >Get Today</button>
			<ControlPanelMonth
				currentYear = {props.currentYear}
				currentMonth = {props.currentMonth}
                getPrevMonth = {props.getPrevMonth}
				getNextMonth = {props.getNextMonth}
            />
		</div>
	)
}

export default ControlPanel;

