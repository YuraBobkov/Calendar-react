import React, { Component } from 'react';
import basicColors from '../data/styleData';
import { days } from '../data/timeData';

const styles = {
	basic: {
		background: 'transparent',
		borderBottom: '1px solid ' + basicColors.mainColor,
		borderTop: '1px solid ' + basicColors.mainColor,
		borderLeft: '1px solid ' + basicColors.mainColor,
		boxSizing: 'border-box',
		color: basicColors.mainColor,
		display: 'inline-block',
		fontSize: '0.9em',
		lineHeight: '1.8em',
		overflow: 'hidden',
		padding: '5px 0',
		textAlign: 'center',
		width: 100/7 + '%'
	},
    
	holiday: {
		color: basicColors.holidayColor
	}	
}

const NameDayView = (props) => {
	let style = Object.assign({}, styles.basic, (props.day === 0) ? styles.holiday : {})
	return (
		<div style = {style}>
			{days[props.day]}
		</div>
	)
}

export default NameDayView;
