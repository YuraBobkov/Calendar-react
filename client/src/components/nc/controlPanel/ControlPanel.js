import React from 'react';
import ControlPanelMonth from './ControlPanelMonth';
import basicColors from '../data/styleData';
import { Link } from 'react-router-dom';

const styles = {
	control: {
        display: 'flex',
		padding: '5px',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
	},
       
	getToday: {
		border: '1px solid ' + basicColors.mainColor,
		background: '#F8F8F8',
		borderRadius: '20px',
		color: basicColors.mainColor,
		cursor: 'pointer',
		padding: '10px 12px',
        marginRight: '5px',
	},
    
    links: {
        marginRight: '10px',
        padding: '8px 6px',
    },
    
    line: {
        textDecoration: 'none',
    },
    
    eventWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
		borderRadius: '20px',
		color: basicColors.mainColor,
		marginRight: '30px',
		padding: '0 15px',
    },
    
    deadlines: {
		background: basicColors.deadlinesColor,
        marginRight: '10px',
        padding: '3px',
        borderRadius: '5px',
    }, 
    
    events: {
		background: basicColors.eventsColor,
        marginRight: '5px',
        padding: '3px',
        borderRadius: '5px',
    }, 
     
    lectures: {
		background: basicColors.lecturesColor,
        marginRight: '10px',
        padding: '3px',
        borderRadius: '5px',
    }, 
    
    workshops: {
		background: basicColors.workshopsColor,
        marginRight: '10px',
        padding: '3px',
        borderRadius: '5px',
    }, 
    
    webinars: {
		background: basicColors.webinarsColor,
        marginRight: '10px',
        padding: '3px',
        borderRadius: '5px',
    }
}

const ControlPanel = props => {
    return (
        <div style={styles.control}>
            <div style={styles.links}>
                <button type="button" style={styles.getToday} onClick={props.toggleFlag2}>
                    <Link style={styles.line} to="/">Month</Link>
                </button>
                <button type="button" style={styles.getToday} onClick={props.toggleFlag}>
                    <Link style={styles.line} to="/week">Week</Link>
                </button>
                <button type="button" style={styles.getToday} onClick={props.getToday}>Today</button>
            </div>
			<ControlPanelMonth
				currentYear={props.currentYear}
				currentMonth={props.currentMonth}
                getPrevMonth={props.getPrevMonth}
				getNextMonth={props.getNextMonth}
            />
            <div style={styles.eventWrapper}>
                <p style={styles.lectures}>Lecture</p>
                <p style={styles.deadlines}>Deadline</p>
                <p style={styles.webinars}>Webinar</p>
                <p style={styles.events}>Event</p>
                <p style={styles.workshops}>Workshop</p>
            </div>
		</div>
	)
};

export default ControlPanel;
