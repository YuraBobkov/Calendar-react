import React from 'react';
import DayView from './DayView';

const createPrevMonthDates = (currentMonthFirstDate, prevMonthLastDate) => {
	let currentMonthFirstDay = currentMonthFirstDate.getDay();
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
};

const createCurrentMonthDates = (currentDate, events, lectures, webinars, workshops, deadlines, trainers) => {
	let today = new Date();
	let dayCount = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
	let daysSet = [];
	for (let date = 1; date <= dayCount; date++) {
		let dateObject = new Date(currentDate.getFullYear(), currentDate.getMonth(), date);
		daysSet.push(<DayView
			key = {'thisMonth-' + date}
			date = {dateObject}
			today = {dateObject.toDateString() === today.toDateString()}
            events = {events}
            lectures = {lectures}
            webinars = {webinars}
            workshops = {workshops}
            deadlines = {deadlines}
            trainers = {trainers}
        />);
	}
	return daysSet;
};

const createNextMonthDates = (currentMonthLastDate) => {
	let currentMonthLastDay = currentMonthLastDate.getDay();
	let daysSet = [];
    let date = 1;
	for (let count = currentMonthLastDay + 1; count < 7; count++, date++) {
		let dateObject = new Date(currentMonthLastDate.getFullYear(), currentMonthLastDate.getMonth(), date);
		daysSet.push(<DayView key={'nextMonth-' + date} date={dateObject} disabled={true} />)
	}
	return daysSet;
}

const styles = {
	nameDay: {
		display: 'block',
		marginBottom: '-5px',
	},
}

const CalendarView = (props) => {
	const currentYear = props.currentDate.getFullYear();
	const currentMonth = props.currentDate.getMonth();
	const currentDay = props.currentDate.getDay();
    
	const currentMonthFirstDate = new Date(currentYear, currentMonth, 1);
	const currentMonthLastDate = new Date(currentYear, currentMonth + 1, 0);
	const prevMonthLastDate = new Date(currentYear, currentMonth, 0);
	
	const prevMonthLastDates = createPrevMonthDates(currentMonthFirstDate, prevMonthLastDate);
	const currentMonthDates = createCurrentMonthDates(props.currentDate, props.events, props.lectures, props.webinars, props.workshops, props.deadlines, props.trainers);
	const nextMontFirstDates = createNextMonthDates(currentMonthLastDate);
    const dayViews = prevMonthLastDates.concat(currentMonthDates).concat(nextMontFirstDates);
    
	return (
            <div style={styles.nameDay}>
                {dayViews}
            </div>
	)
}

export default CalendarView;
