import React from 'react';
import basicColors from '../data/styleData';
import { months } from '../data/timeData';

const styles = {
    controlPanelMonth: {
        display: 'flex',
        justifyContent: 'space-around',
    },

    controlButton: {
		border: '1px solid ' + basicColors.mainColor,
        background: 'transparent',
		borderRadius: '20px',
		color: basicColors.mainColor,
		cursor: 'pointer',
		margin: '0',
		padding: '0 15px',
        height: '40px',
	},

    monthDropdown: {
		color: basicColors.mainColor,
		cursor: 'pointer',
		padding: '10px 10px',
		textAlign: 'center',
		width: '150px',
        border: '1px solid' + basicColors.mainColor,
        borderRadius: '20px',
        height: '20px',
        margin: '0 10px',
	}
};

const ControlPanelMonth = (props) => {
    return (
		<div style={styles.controlPanelMonth}>
			<button style={styles.controlButton} onClick={props.getPrevMonth}>&lt;</button>
			<div style={styles.monthDropdown}>{months[props.currentMonth]} {props.currentYear}</div>
			<button style={styles.controlButton} onClick={props.getNextMonth}>&gt;</button>
		</div>
    )
}

export default ControlPanelMonth;
