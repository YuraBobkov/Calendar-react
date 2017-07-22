import React from 'react';
import basicColors from '../data/styleData';
import { Link } from 'react-router-dom';

const DayView = (props) => {
	let style = Object.assign(
        {}, 
		styles.common, 
		(props.disabled) ? styles.disabled : styles.real, 
		(props.today) ? styles.today : {}
	)

                                    
                               
                               
                               
     let getDeadlines = () => {
        if (!props.disabled && props.deadlines.length > 0) {
            let deadlinesSet = [];
            props.deadlines.map((item,i) => {
                 if (item.start.toString().slice(0,15) === props.date.toString().slice(0,15)) {
                     deadlinesSet.push(<Link to="/week" key={item.id}> {item.title} {item.type}</Link>);
                 }
            })
            return deadlinesSet;
        }
    }
                                
    let getEvents = () => {
         if (!props.disabled && props.events.length > 0) {
            let eventsSet = [];
            props.events.map((item,i) => {
                 if (item.start.toString().slice(0,15) === props.date.toString().slice(0,15)) {
                     eventsSet.push(<Link to="/week" key={item.id}> {item.title} {item.type}</Link>);
                 }
            })
            return eventsSet;
        }
    }
                                
    let getLectures = () => {
         if (!props.disabled && props.deadlines.length > 0) {
            let lecturesSet = [];
            props.lectures.map((item,i) => {
                 if (item.start.toString().slice(0,15) === props.date.toString().slice(0,15)) {
                     lecturesSet.push(<Link to="/week" key={item.id}> {item.title} {item.type}</Link>);
                 }
            })
            return lecturesSet;
        }
    }                         
                
    let getWorkshops = () => {
         if (!props.disabled && props.deadlines.length > 0) {
            let workshopsSet = [];
            props.workshops.map((item,i) => {
                 if (item.start.toString().slice(0,15) === props.date.toString().slice(0,15)) {
                     workshopsSet.push(<Link to="/week" key={item.id}> {item.title} {item.type}</Link>);
                 }
            })
            return workshopsSet;
        }
    }  
    
    let getWebinars = () => {
         if (!props.disabled && props.deadlines.length > 0) {
            let webinarsSet = [];
            props.webinars.map((item,i) => {
                 if (item.start.toString().slice(0,15) === props.date.toString().slice(0,15)) {
                     webinarsSet.push(<Link to="/week" key={item.id}> {item.title} {item.type}</Link>);
                 }
            })
            return webinarsSet;
        }
    }                           
                               
                               
                  
                               
	return (
		<div style = {style}>
			<div style = {styles.content}>
				{props.date.getDate()}
			</div>
             <div style = {styles.contentContainer}>   
                <div style = {styles.contentEvents}> 
                    {getEvents()}
                </div>    
                <div style = {styles.contentDeadlines}> 
                    {getDeadlines()}
                </div>
                <div style = {styles.contentLectures}> 
                    {getLectures()}
                </div>
                <div style = {styles.contentWorkshops}> 
                    {getWorkshops()}
                </div>
                <div style = {styles.contentWebinars}> 
                    {getWebinars()}
                </div>  
            </div>   
                       

		</div>
	)
}

const styles = {
	common: {
        display: 'flex',
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
	},
    
    contentContainer: {
		position: 'absolute',
		padding: '5px',
		top: 0,
		left: 0
	},
    
    contentDeadlines: {
		background: basicColors.deadlinesColor
    }, 
    
    contentEvents: {
		background: basicColors.eventsColor
    }, 
     
    contentLectures: {
		background: basicColors.lecturesColor
    }, 
    
    contentWorkshops: {
		background: basicColors.workshopsColor
    }, 
    
    contentWebinars: {
		background: basicColors.webinarsColor
    }, 
}

export default DayView;
