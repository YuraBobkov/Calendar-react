import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './controlPanel/ControlPanel';
import CalendarView from './calendarViews/CalendarView';
import CalendarWeek from './calendarViews/CalendarWeek';
import NameDayView from './calendarViews/NameDayView';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const styles = {
    common: {
    fontFamily: 'Courier New'
    }, 
    nameDay: {
		display: 'block',
		marginBottom: '-5px'
	}
}

class Calendar extends Component {
	constructor(props) {
		super(props);
        this.state = {
            currentDate: new Date(),
            events: [],
            lectures: [],
            webinars: [],
            workshops: [],
            deadlines: [],
            trainers: [],
            flag: true
        }
        this.getPrevMonth = this.getPrevMonth.bind(this);
        this.getNextMonth = this.getNextMonth.bind(this);
        this.getToday = this.getToday.bind(this);
        this.toggleFlag = this.toggleFlag.bind(this);
        this.toggleFlag2 = this.toggleFlag2.bind(this);
    }
    
    componentDidMount() { // componentDidMount
        
        let getEvents = () => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://128.199.53.150/events/');
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let result = JSON.parse(xhr.responseText).map((item) => {
                            item.start = new Date(item.start);
                            return item;
                        });
                        
                        let events = result.filter((item) => {
                            return item.type == 'event';
                        });
                        
                        let lectures = result.filter((item) => {
                            return item.type == 'lecture';
                        });
                        
                        let webinars = result.filter((item) => {
                            return item.type == 'webinar';
                        });
                        
                        let workshops = result.filter((item) => {
                            return item.type == 'workshop';
                        });
                        
                        let deadlines = result.filter((item) => {
                            return item.type == 'deadline';
                        });
//                        result = null;
                        this.setState({
                            events: events,
                            lectures: lectures,
                            webinars: webinars,
                            workshops: workshops,
                            deadlines: deadlines
                        });
//                        console.log('events: ', this.state.events)
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
                    } else {
                        alert(xhr.status + ': ' + xhr.statusText)
                    }
                }
            }
        }
        
        getEvents();
        getTrainers();
    }
    
	getPrevMonth() {
        if (this.state.flag == true) {
            let currentMonth = (this.state.currentDate.getMonth() > 0) ? this.state.currentDate.getMonth() - 1 : 11;
            let currentYear = (currentMonth === 11) ? this.state.currentDate.getFullYear() - 1 : this.state.currentDate.getFullYear();
            this.setState({currentDate: new Date(currentYear, currentMonth)});
        }
	}

	getNextMonth() {
        if (this.state.flag == true) {
            let currentMonth = (this.state.currentDate.getMonth() < 11) ? this.state.currentDate.getMonth() + 1 : 0;
            let currentYear = (currentMonth === 0) ? this.state.currentDate.getFullYear() + 1 : this.state.currentDate.getFullYear();
            this.setState({currentDate: new Date(currentYear, currentMonth)});
        }
	}
    
    getToday() {
        this.setState({currentDate: new Date()});
    }
    
    toggleFlag() {
        this.setState({ flag: false });
    }
    
    toggleFlag2() {
        this.setState({ flag: true });
    }
    
	render() {
//        console.log(this.state.currentDate)
        
		return (
            <Router>
                <div style = {styles.common}>
                    <ControlPanel 
                        currentYear = {this.state.currentDate.getFullYear()}
                        currentMonth = {this.state.currentDate.getMonth()}
                        getPrevMonth = {this.getPrevMonth}
                        getNextMonth = {this.getNextMonth}
                        getToday = {this.getToday}  
                        toggleFlag = {this.toggleFlag}  
                        toggleFlag2 = {this.toggleFlag2}  
                    />
                    <div style = {styles.nameDay}>
                        {nameDayViews}
                    </div>
                    <Route exact path="/" component = {() => 
                        <CalendarView 
                            currentDate = {this.state.currentDate}
                            events = {this.state.events} 
                            lectures = {this.state.lectures}
                            webinars = {this.state.webinars}
                            workshops = {this.state.workshops}
                            deadlines = {this.state.deadlines}
                        />
                    }/>
                    <Route path="/week" component={() => 
                    <CalendarWeek
                        currentDate = {this.state.currentDate}
                        events = {this.state.events} 
                        lectures = {this.state.lectures}
                        webinars = {this.state.webinars}
                        workshops = {this.state.workshops}
                        deadlines = {this.state.deadlines}
                    
                    />  
                }/>
                </div>
            </Router>
		)
	}
}



const createNameDay = () => {
    let daysSet = [];
    for (let day = 0; day < 7; day++) {
		daysSet.push(<NameDayView key = {'header-' + day} day = {day} />)
	}
    return daysSet;
}
                     
let nameDayViews = createNameDay();





const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);




ReactDOM.render(
    <Calendar/>, 
            document.querySelector('#app'));







//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import

//https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

//router: https://www.youtube.com/watch?v=_Fzl0Cim6F8&list=WL&index=60&t=6s
//https://www.youtube.com/watch?v=niCzY8xYIpc&list=WL&index=59&t=1030s
//https://www.youtube.com/watch?v=YCJo54pxgtI&list=WL&index=57&t=907s
//https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
//https://www.youtube.com/watch?v=eofpZPRUnP8
//https://www.youtube.com/watch?v=iaYxvJZh5Jw&list=PLMve8qV_h5E8YuaoKG34145IuLRatslPU&index=11


//добавить логику, если введен неверный путь по ссылке (скринкасты)
//показать какие цвета для каких ивентов
//так что насчет координат в локейшене? переназначил location на vulісa Akadеmіka Kuprеvіča 1, Building 5, Minsk
