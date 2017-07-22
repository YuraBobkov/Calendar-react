import React from 'react';
import ControlPanelMonth from './ControlPanelMonth';
import basicColors from '../data/styleData';
import { Link } from 'react-router-dom';

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
	},
    
    links: {
        display: 'inline-block',
        marginRight: '30px',
        padding: '10px 15px',
        listStyleType: 'none',
        float: 'left'
    }
}


const ControlPanel = (props) => {
    
    
    
	return (
		<div style = {styles.control}>
            <div style = {styles.links}>
        
                <button type = "button" style = {styles.getToday}><Link to="/">Month</Link></button>
                <button type = "button" style = {styles.getToday}><Link to="/week">Week</Link></button>
        
            </div>
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

