import React, { Component } from 'react';
import NameDayView from './NameDayView';

const styles = {
    nameDay: {
        display: 'block',
        marginBottom: '10px'
    }
}

const createNameDay = () => {
    let nameDayViews = [];
    for (let d = 0; d < 7; d++) {
        nameDayViews.push(<NameDayView key = {'header-' + d} day = {d}/>)
    }
    return nameDayViews;
}

const CalendarView = (props) => {
    let nameDayViews = createNameDay();
    let dayViews = [];
    return (
        <div style = {styles.nameDay}>
            {nameDayViews}
        </div>
    )
}

export default CalendarView;
