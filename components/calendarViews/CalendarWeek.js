import React from 'react';
import DayView from './DayView';
import { Link } from 'react-router-dom';

const CalendarWeek = (props) => {
	const currentYear = props.currentDate.getFullYear();
	const currentMonth = props.currentDate.getMonth();
	const currentDay = props.currentDate.getDay();
    
	const currentMonthFirstDate = new Date(currentYear, currentMonth, 1); 
	const currentMonthLastDate = new Date(currentYear, currentMonth + 1, 0); 
	const prevMonthLastDate = new Date(currentYear, currentMonth, 0); 
    
    const currentWeekNumber = getWeekNumber(props.currentDate);
    const firstDayOfCurrentWeek = getFirstDayOfCurrentWeek(currentWeekNumber, currentYear);
    console.log(firstDayOfCurrentWeek)
    
    const CurrentWeekDays = createCurrentWeekDays(firstDayOfCurrentWeek, props.events, props.lectures, props.webinars, props.workshops, props.deadlines);
    
	return (
            <div style = {styles.nameDay}>
                {CurrentWeekDays}
            </div>
	)
}

// получили номер недели this.state.currentDate
let getWeekNumber = (currentDate) => {
    Date.prototype.getWeekNumber = function(){
    var d = new Date(+this);
    d.setHours(0,0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};
    return currentDate.getWeekNumber();
}

// получили понедельник 28 например ( 1 число четверг)
let getFirstDayOfCurrentWeek = (currentWeekNumber, currentYear) => {
    var simple = new Date(currentYear, 0, 1 + (currentWeekNumber - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
}


const createCurrentWeekDays = (firstDayOfCurrentWeek, events, lectures, webinars, workshops, deadlines) => {
    let today = new Date();
    let daysSet = [];
    
    for (let n = 0; n < 7; n++) {
        let date = firstDayOfCurrentWeek.getDate() - 1;
        let dateObject = new Date(firstDayOfCurrentWeek.getFullYear(), firstDayOfCurrentWeek.getMonth(), date + n);
        daysSet.push(<DayView 
			key = {'thisWeek-' + n} 
			date = {dateObject} 
			today = {dateObject.toDateString() == today.toDateString()}
            events = {events}
            lectures = {lectures}
            webinars = {webinars}
            workshops = {workshops}
            deadlines = {deadlines}
        />)
    }
    return daysSet;
}

          
                     
const styles = {
	nameDay: {
		display: 'block',
		marginBottom: '-5px'
	}
}
                       
export default CalendarWeek;
