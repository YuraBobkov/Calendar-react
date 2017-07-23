import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './controlPanel/ControlPanel';
import CalendarView from './calendarViews/CalendarView';
import CalendarWeek from './calendarViews/CalendarWeek';
import NameDayView from './calendarViews/NameDayView';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const styles = {
    common: {
        fontFamily: 'Courier New',
    },
    nameDay: {
        display: 'block',
        marginBottom: '-5px',
    },
};

const createNameDay = () => {
    const daysSet = [];
    for (let day = 0; day < 7; day++) {
        daysSet.push(<NameDayView key={'header-' + day} day={day} />);
    }
    return daysSet;
};
const nameDayViews = createNameDay();

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
            flag: true,
        };
        this.getPrevMonth = this.getPrevMonth.bind(this);
        this.getNextMonth = this.getNextMonth.bind(this);
        this.getToday = this.getToday.bind(this);
        this.toggleFlag = this.toggleFlag.bind(this);
        this.toggleFlag2 = this.toggleFlag2.bind(this);
    }

    componentDidMount() {
        const getEvents = () => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://128.199.53.150/events/');
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const result = JSON.parse(xhr.responseText).map((item) => {
                            item.start = new Date(item.start);
                            return item;
                        });

                        const events = result.filter(item => {
                            return item.type === 'event';
                        });

                        const lectures = result.filter((item) => {
                            return item.type === 'lecture';
                        });

                        const webinars = result.filter((item) => {
                            return item.type === 'webinar';
                        });

                        const workshops = result.filter((item) => {
                            return item.type === 'workshop';
                        });

                        const deadlines = result.filter((item) => {
                            return item.type ==='deadline';
                        });
                        this.setState({
                            events: events,
                            lectures: lectures,
                            webinars: webinars,
                            workshops: workshops,
                            deadlines: deadlines,
                        });
                    } else {
                        alert(xhr.status, xhr.statusText);
                }
            }
        };
    };

    const getTrainers = () => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://128.199.53.150/trainers');
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        this.setState({
                            trainers: JSON.parse(xhr.responseText),
                        });
                    } else {
                        alert(xhr.status, xhr.statusText);
                    }
                }
            };
        };
        getEvents();
        getTrainers();
    }

    getPrevMonth() {
        if (this.state.flag === true) {
            const currentMonth = (this.state.currentDate.getMonth() > 0) ? this.state.currentDate.getMonth() - 1 : 11;
            const currentYear = (currentMonth === 11) ? this.state.currentDate.getFullYear() - 1 : this.state.currentDate.getFullYear();
            this.setState({ currentDate: new Date(currentYear, currentMonth) });
        }
        if (this.state.flag === false) {
            const currentDateMinusWeek = this.state.currentDate;
            currentDateMinusWeek.setDate(this.state.currentDate.getDate() - 7);
            this.setState({ currentDate: currentDateMinusWeek });
        }
    }

    getNextMonth() {
        if (this.state.flag === true) {
            const currentMonth = (this.state.currentDate.getMonth() < 11) ? this.state.currentDate.getMonth() + 1 : 0;
            const currentYear = (currentMonth === 0) ? this.state.currentDate.getFullYear() + 1 : this.state.currentDate.getFullYear();
            this.setState({ currentDate: new Date(currentYear, currentMonth) });
        }
        if (this.state.flag === false) {
            const currentDatePlusWeek = this.state.currentDate;
            currentDatePlusWeek.setDate(this.state.currentDate.getDate() + 7);
            this.setState({ currentDate: currentDatePlusWeek });
        }
    }

    getToday() {
        this.setState({ currentDate: new Date() });
    }

    toggleFlag() {
        this.setState({ flag: false });
    }

    toggleFlag2() {
        this.setState({ flag: true });
    }

    render() {
        return (
            <Router>
                <div style={styles.common}>
                    <ControlPanel
                        currentYear={this.state.currentDate.getFullYear()}
                        currentMonth={this.state.currentDate.getMonth()}
                        getPrevMonth={this.getPrevMonth}
                        getNextMonth={this.getNextMonth}
                        getToday={this.getToday}
                        toggleFlag={this.toggleFlag}
                        toggleFlag2={this.toggleFlag2}
                    />
                    <div style={styles.nameDay}>
                        {nameDayViews}
                    </div>
                    <Route
                        exact path="/" component={() =>
                            <CalendarView
                                currentDate={this.state.currentDate}
                                events={this.state.events}
                                lectures={this.state.lectures}
                                webinars={this.state.webinars}
                                workshops={this.state.workshops}
                                deadlines={this.state.deadlines}
                                trainers={this.state.trainers}
                            />
                        }
                    />
                    <Route
                        path="/week" component={() =>
                            <CalendarWeek
                                currentDate={this.state.currentDate}
                                events={this.state.events}
                                lectures={this.state.lectures}
                                webinars={this.state.webinars}
                                workshops={this.state.workshops}
                                deadlines={this.state.deadlines}
                                trainers={this.state.trainers}
                            />
                        }
                    />
                </div>
            </Router>
    );
    }
}

ReactDOM.render(
    <Calendar />,
    document.querySelector('#app')
);
