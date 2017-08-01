import React, { Component } from 'react';
import basicColors from '../data/styleData';
import Review from './Review';

class DayView extends Component {
    constructor(props) {
		super(props);
        this.state = {
			show: false,
            taskTemplate: true,
            webinarTemplate: true,
            eventTemplate: true,
		}
        this.toggleThisShow = this.toggleThisShow.bind(this);
    }

    toggleThisShow(event) {
        this.setState({show: !this.state.show});
    }

    getDeadlines () {
        if (!this.props.disabled && this.props.deadlines.length > 0) {
            let deadlinesSet = [];
            let keyDiv = 1;
            let keyReview = 10000;
            this.props.deadlines.map((item,i) => {
                if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                    let deadlineDate = item.start.toString().slice(4,10) + ', ' + item.start.toString().slice(15,21);
                    let timeMain = item.start.toString().slice(16,21);
                    deadlinesSet.push(
                        <div key={keyDiv}>
                            <p key={item.id} onClick={this.toggleThisShow}>
                                {item.title} {timeMain}
                            </p>
                            <Review
                                key={keyReview}
                                show={this.state.show}
                                toggleThisShow={this.toggleThisShow}
                                taskTitle={item.title}
                                description={item.description}
                                deadline={deadlineDate}
                                taskTemplate={this.state.taskTemplate}
                                location={item.location}
                            />
                        </div>
                    );
                    keyDiv += 1;
                    keyReview += 1;                    
                 }
            })
            return deadlinesSet;
        }
    }

    getEvents () {
         if (!this.props.disabled && this.props.events.length > 0) {
            let eventsSet = [];
            let keyDiv = 40000;
            let keyReview = 50000;
            this.props.events.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     let time = item.start.toString().slice(4,10) + ', ' + item.start.toString().slice(15,21);
                     let timeMain = item.start.toString().slice(16,21);
                     eventsSet.push(
                         <div key={keyDiv}>
                            <p key={item.id} onClick={this.toggleThisShow}>
                                {item.title} {timeMain}
                            </p>
                            <Review
                                key={keyReview}  
                                show={this.state.show} 
                                toggleThisShow={this.toggleThisShow}
                                taskTitle={item.title}
                                description={item.description}
                                time={time}
                                eventTemplate={this.state.eventTemplate}
                                duration={item.duration}
                                trainers={this.props.trainers}
                                location={item.location}
                            />
                        </div>
                    );
                    keyDiv += 1;
                    keyReview += 1; 
                 }
            })
            return eventsSet;
        }
    }

    getLectures() {
         if (!this.props.disabled && this.props.deadlines.length > 0) {
            let lecturesSet = [];
            let keyDiv = 70000;
            let keyReview = 80000;
            this.props.lectures.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     let time = item.start.toString().slice(4,10) + ', ' + item.start.toString().slice(15,21);
                     let timeMain = item.start.toString().slice(16,21);
                     lecturesSet.push(
                         <div key={keyDiv}>
                            <p key={item.id} onClick={this.toggleThisShow}>
                                {item.title} {timeMain}
                            </p>
                            <Review
                                key={keyReview}
                                show={this.state.show}
                                toggleThisShow={this.toggleThisShow}
                                taskTitle={item.title}
                                time={time}
                                webinarTemplate={this.state.webinarTemplate}
                                duration={item.duration}
                                trainers={this.props.trainers}
                                speakers={item.speakers}
                                location={item.location}
                            />
                        </div>
                    );
                    keyDiv += 1;
                    keyReview += 1;  
                 }
            })
            return lecturesSet;
        }
    }

    getWorkshops () {
         if (!this.props.disabled && this.props.deadlines.length > 0) {
            let workshopsSet = [];
            let keyDiv = 50000;
            let keyReview = 60000;
            this.props.workshops.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     let time = item.start.toString().slice(4,10) + ', ' + item.start.toString().slice(15,21);
                     let timeMain = item.start.toString().slice(16,21);
                     workshopsSet.push(
                         <div key={keyDiv}>
                         <div>
                            <p key={item.id} onClick={this.toggleThisShow}>
                                {item.title} {timeMain}
                            </p>
                         </div>
                            <Review
                                key={keyReview}
                                show={this.state.show}
                                toggleThisShow={this.toggleThisShow}
                                taskTitle={item.title}
                                time={time}
                                webinarTemplate={this.state.webinarTemplate}
                                duration={item.duration}
                                trainers={this.props.trainers}
                                speakers={item.speakers}
                                location={item.location}
                            />
                        </div>
                    );
                    keyDiv += 1;
                    keyReview += 1;  
                 }
            })
            return workshopsSet;
        }
    }

     getWebinars () {
         if (!this.props.disabled && this.props.deadlines.length > 0) {
            let webinarsSet = [];
            let keyDiv = 20000;
            let keyReview = 30000;
            this.props.webinars.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     let time = item.start.toString().slice(4,10) + ', ' + item.start.toString().slice(15,21);
                     let timeMain = item.start.toString().slice(16,21);
                     webinarsSet.push(
                         <div key={keyDiv}>
                            <p key={item.id} onClick={this.toggleThisShow}>
                                {item.title} {timeMain}
                            </p>
                            <Review
                                key={keyReview}  
                                show={this.state.show} 
                                toggleThisShow={this.toggleThisShow}
                                taskTitle={item.title}
                                time={time}
                                webinarTemplate={this.state.webinarTemplate}
                                duration={item.duration}
                                trainers={this.props.trainers}
                                speakers={item.speakers}
                            />
                        </div>
                     );
                    keyDiv += 1;
                    keyReview += 1;  
                 }
            });
            return webinarsSet;
        }
    }

    render() {
        const style = Object.assign(
            {},
            styles.common,
            (this.props.disabled) ? styles.disabled : styles.real,
            (this.props.today) ? styles.today : {}
	   );
        return (
            <div style={style}>
                <div style={styles.content}>
                    {this.props.date.getDate()}
                </div>
                <div style={styles.contentContainer}>   
                    <div style={styles.contentEvents}> 
                        {this.getEvents()}
                    </div>
                    <div style={styles.contentDeadlines}>
                        {this.getDeadlines()}
                    </div>
                    <div style={styles.contentLectures}> 
                        {this.getLectures()}
                    </div>
                    <div style={styles.contentWorkshops}>
                        {this.getWorkshops()}
                    </div>
                    <div style={styles.contentWebinars}>
                        {this.getWebinars()}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
	common: {
		boxSizing: 'border-box',
		display: 'inline-block',
		marginBottom: '-5px',
		overflow: 'hidden',
		padding: '5px 0',
		paddingTop: 100/7/2 + '%',
		position: 'relative',
		textAlign: 'left',
		width: 100/7 + '%',
        height: '120px',
	},

	real: {
		border: '1px solid ' + basicColors.borderColor,
		color: basicColors.mainColor,
	},

	today: {
		background: basicColors.todayColor,
		zIndex: 1,
	},

	disabled: {
		background: '#F8F8F8',
		border: '1px solid #F2F2F2',
		color: '#D2D2D2',
	},

	content: {
		position: 'absolute',
		padding: '5px',
		top: 0,
		right: 0,
	},

    contentContainer: {
		position: 'absolute',
		padding: '5px',
		top: 0,
		left: 0,
	},

    contentDeadlines: {
		background: basicColors.deadlinesColor,
        cursor: 'pointer',
    },

    contentEvents: {
		background: basicColors.eventsColor,
        cursor: 'pointer',
    },

    contentLectures: {
		background: basicColors.lecturesColor,
        cursor: 'pointer',
    },

    contentWorkshops: {
		background: basicColors.workshopsColor,
        cursor: 'pointer',
    },

    contentWebinars: {
		background: basicColors.webinarsColor,
        cursor: 'pointer',
    },
}

export default DayView;
