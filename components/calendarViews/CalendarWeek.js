import React from 'react';
import DayView from './DayView';
import { Link } from 'react-router-dom';

const styles = {
	nameDay: {
		display: 'block',
		marginBottom: '-5px',
	}
};

const CalendarWeek = (props) => {
	const currentYear = props.currentDate.getFullYear();
	const currentMonth = props.currentDate.getMonth();
	const currentDay = props.currentDate.getDay();
    
	const currentMonthFirstDate = new Date(currentYear, currentMonth, 1);
	const currentMonthLastDate = new Date(currentYear, currentMonth + 1, 0);
	const prevMonthLastDate = new Date(currentYear, currentMonth, 0);
    
    const currentWeekNumber = getWeekNumber(props.currentDate);
    const firstDayOfCurrentWeek = getFirstDayOfCurrentWeek(currentWeekNumber, currentYear);
    
    const CurrentWeekDays = createCurrentWeekDays(firstDayOfCurrentWeek, props.events, props.lectures, props.webinars, props.workshops, props.deadlines, props.trainers);
    
	return (
            <div style={styles.nameDay}>
                {CurrentWeekDays}
            </div>
	);
};

let getWeekNumber = (currentDate) => {
    Date.prototype.getWeekNumber = function(){
        let d = new Date(+this);
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        return Math.ceil((((d - new Date(d.getFullYear(),0,1)) / 8.64e7) + 1) / 7);
    };
    return currentDate.getWeekNumber();
};

let getFirstDayOfCurrentWeek = (currentWeekNumber, currentYear) => {
    let simple = new Date(currentYear, 0, 1 + (currentWeekNumber - 1) * 7);
    let dow = simple.getDay();
    let ISOweekStart = simple;
    if (dow <= 4) {
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    } else {
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    }
    return ISOweekStart;
};

const createCurrentWeekDays = (firstDayOfCurrentWeek, events, lectures, webinars, workshops, deadlines, trainers) => {
    let today = new Date();
    let daysSet = [];
    for (let n = 0; n < 7; n++) {
        let date = firstDayOfCurrentWeek.getDate() - 1;
        let dateObject = new Date(firstDayOfCurrentWeek.getFullYear(), firstDayOfCurrentWeek.getMonth(), date + n);
        daysSet.push(<DayView
			key={'thisWeek-' + n}
			date={dateObject}
			today={dateObject.toDateString() == today.toDateString()}
            events={events}
            lectures={lectures}
            webinars={webinars}
            workshops={workshops}
            deadlines={deadlines}
            trainers={trainers}
        />);
    }
    return daysSet;
};
                   
export default CalendarWeek;
