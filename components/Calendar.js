import React, { Component } from 'react';
import ControlPanel from './controlPanel/ControlPanel';
import CalendarView from './calendarViews/CalendarView';

const styles = {
    fontFamily: 'Courier New'
}

class Calendar extends Component {
	constructor(props) {
		super(props);
        this.state = {
            currentDate: new Date()
        }
    }

	render() {
		return (
			<div style = {styles}>
                <ControlPanel
                currentYear = {this.state.currentDate.getFullYear()}
                currentMonth = {this.state.currentDate.getMonth()}
                />
                <CalendarView
                    currentDate = {this.state.currentDate}
                />
			</div>
		)
	}
}

export default Calendar;

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import

//https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

// вынести currentDate из state?
