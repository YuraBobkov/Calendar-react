import React, { Component } from 'react';
import ControlPanel from './controlPanel/ControlPanel';

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
            
			</div>
		)
	}
}

export default Calendar;

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import

//https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
