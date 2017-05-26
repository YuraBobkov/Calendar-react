import React, { Component } from 'react';
import basicColors from '../data/styleData';

const DayView = (props) => {
	let style = Object.assign(
        {}, 
		styles.common, 
		(props.disabled) ? styles.disabled : styles.real, 
		(props.today) ? styles.today : {}
	)
//    console.log(props)
	return (
		<div style = {style}>
			<div style = {styles.content}>
				{props.date.getDate()}
			</div>
		</div>
	)
}

const styles = {
	common: {
		boxSizing: 'border-box',
		display: 'inline-block',
		marginBottom: '-5px',
		overflow: 'hidden',
		padding: '5px 0',
		paddingTop: 100/7/2 + '%',
		position: 'relative',
		textAlign: 'left',
		width: 100/7 + '%'
	},
    
	real: {
		border: '1px solid ' + basicColors.borderColor,
		color: basicColors.mainColor
	},
    
	today: {
		background: basicColors.todayColor,
		zIndex: 1
	},
    
	disabled: {
		background: '#F8F8F8',
		border: '1px solid #F2F2F2',
		color: '#D2D2D2'
	},
    
	content: {
		position: 'absolute',
		padding: '5px',
		top: 0,
		right: 0
	}
}

export default DayView;
