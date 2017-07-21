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
        this.getPrevMonth = this.getPrevMonth.bind(this);
        this.getNextMonth = this.getNextMonth.bind(this);
        this.getToday = this.getToday.bind(this);
    }
    
    componentDidMount() {
        let getEvents = () => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://128.199.53.150/events');
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        this.setState({
                            events: JSON.parse(xhr.responseText)
                        });
                        console.log('events: ', this.state.events)
                    } else {
                        console.log(xhr.status + ': ' + xhr.statusText)
                    }
                }
            }
        }
        
        let getTrainers = () => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://128.199.53.150/trainers');
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        this.setState({
                            trainers: JSON.parse(xhr.responseText)
                        });
                        console.log('trainers: ', this.state.trainers)
                    } else {
                        console.log(xhr.status + ': ' + xhr.statusText)
                    }
                }
            }
        }
        
        getEvents();
        getTrainers();
    }
    
	getPrevMonth() {
        console.log(this.state)
		let currentMonth = (this.state.currentDate.getMonth() > 0) ? this.state.currentDate.getMonth() - 1 : 11;
		let currentYear = (currentMonth === 11) ? this.state.currentDate.getFullYear() - 1 : this.state.currentDate.getFullYear();
		this.setState({currentDate: new Date(currentYear, currentMonth)});
	}

	getNextMonth() {
		let currentMonth = (this.state.currentDate.getMonth() < 11) ? this.state.currentDate.getMonth() + 1 : 0;
		let currentYear = (currentMonth === 0) ? this.state.currentDate.getFullYear() + 1 : this.state.currentDate.getFullYear();
		this.setState({currentDate: new Date(currentYear, currentMonth)});
	}
    
    getToday() {
        this.setState({currentDate: new Date()});
    }
    
	render() {
		return (
			<div style = {styles}> 
                <ControlPanel
                    currentYear = {this.state.currentDate.getFullYear()}
                    currentMonth = {this.state.currentDate.getMonth()}
                    getPrevMonth = {this.getPrevMonth}
                    getNextMonth = {this.getNextMonth}
                    getToday = {this.getToday}
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


