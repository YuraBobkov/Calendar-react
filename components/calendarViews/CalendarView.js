import React from 'react';
import NameDayView from './NameDayView';
import DayView from './DayView';

const CalendarView = (props) => {
	const currentYear = props.currentDate.getFullYear();
	const currentMonth = props.currentDate.getMonth();
	const currentDay = props.currentDate.getDay();
    
	const currentMonthFirstDate = new Date(currentYear, currentMonth, 1); // Mon May 01 2017 
	const currentMonthLastDate = new Date(currentYear, currentMonth + 1, 0); // Wed May 31 2017 00:00:00 
	const prevMonthLastDate = new Date(currentYear, currentMonth, 0); //Sun Apr 30 2017 00:00:00
	
	const prevMonthLastDates = createPrevMonthDates(currentMonthFirstDate, prevMonthLastDate);
	const currentMonthDates = createCurrentMonthDates(props.currentDate, props.event, props.events, props.lectures, props.webinars, props.workshops, props.deadlines);
	const nextMontFirstDates = createNextMonthDates(currentMonthLastDate);
    const dayViews = prevMonthLastDates.concat(currentMonthDates).concat(nextMontFirstDates);
//console.log(props.event)
	return (
        <div>
            <div style = {styles.nameDay}>
                {nameDayViews}
            </div>
            <div style = {styles.nameDay}>
                {dayViews}
            </div>
        </div>
	)
}

const createNameDay = () => {
    let daysSet = [];
    for (let day = 0; day < 7; day++) {
		daysSet.push(<NameDayView key = {'header-' + day} day = {day} />)
	}
    return daysSet;
}
                     
let nameDayViews = createNameDay();
	
const createPrevMonthDates = (currentMonthFirstDate, prevMonthLastDate) => {
	let currentMonthFirstDay = currentMonthFirstDate.getDay(); //1
	let daysSet = [];
	for (let deduct = currentMonthFirstDay - 1; deduct >= 0; deduct--) {
		let date = prevMonthLastDate.getDate() - deduct;
		let dateObject = new Date(prevMonthLastDate.getFullYear(), prevMonthLastDate.getMonth(), date);
		daysSet.push(<DayView 
            key = {'prevMonth-' + date}
            date = {dateObject} 
            disabled = {true} 
        />);
	}
	return daysSet;
}

const createCurrentMonthDates = (currentDate, event, events, lectures, webinars, workshops, deadlines) => {
	let today = new Date();
	let dayCount = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
	let daysSet = [];
	for (let date = 1; date <= dayCount; date++) {
		let dateObject = new Date(currentDate.getFullYear(), currentDate.getMonth(), date);
		daysSet.push(<DayView 
			key = {'thisMonth-' + date} 
			date = {dateObject} 
			today = {dateObject.toDateString() == today.toDateString()}
            event = {event}
            events = {events}
            lectures = {lectures}
            webinars = {webinars}
            workshops = {workshops}
            deadlines = {deadlines}
        />)
	}
	return daysSet;
}

const createNextMonthDates = (currentMonthLastDate) => {
	let currentMonthLastDay = currentMonthLastDate.getDay(); //3
	let daysSet = [];
    let date = 1;
	for (let count = currentMonthLastDay + 1; count < 7; count++, date++) {
		let dateObject = new Date(currentMonthLastDate.getFullYear(), currentMonthLastDate.getMonth(), date);
		daysSet.push(<DayView key = {'nextMonth-' + date} date = {dateObject} disabled = {true} />)
	}
	return daysSet;
}
                
                     
const styles = {
	nameDay: {
		display: 'block',
		marginBottom: '-5px'
	}
}
                       
export default CalendarView;
