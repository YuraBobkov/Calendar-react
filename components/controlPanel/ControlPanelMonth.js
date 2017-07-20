import React from 'react';
import basicColors from '../data/styleData';
import { months } from '../data/timeData';

const styles = {
    controlPanelMonth: {
        display: 'inline-block',
        margin: '0'
    },
    
    controlButton: {
		border: '1px solid ' + basicColors.mainColor,
		background: 'transparent',
		borderRadius: '20px',
		color: basicColors.mainColor,
		cursor: 'pointer',
		display: 'inline-block',
		margin: '0',
		padding: '10px 15px'
	},
    
    monthDropdown: {
		color: basicColors.mainColor,
		cursor: 'pointer',
		display: 'inline-block',
		padding: '10px 0',
        margin: '10px',
		textAlign: 'center',
		width: '150px',
        border: '1px solid' + basicColors.mainColor,
        borderRadius: '20px'
	}
}

const ControlPanelMonth = (props) => {
    console.log(props)
    return (
		<div style = {styles.controlPanelMonth}>
			<button style = {styles.controlButton} onClick = {props.getPrevMonth}>&lt;</button>
			<div style = {styles.monthDropdown}>{months[props.currentMonth]} {props.currentYear}</div>
			<button style = {styles.controlButton} onClick = {props.getNextMonth}>&gt;</button>
		</div>
    )
}

export default ControlPanelMonth;
