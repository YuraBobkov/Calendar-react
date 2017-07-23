import React, { Component } from 'react';
import basicColors from '../data/styleData';
import Review from './Review';
//import { Link } from 'react-router-dom';

class DayView extends Component {
    constructor(props) {
		super(props);
        this.state = {
			show: false
		}
        this.toggleThisShow = this.toggleThisShow.bind(this);
    }
    
    toggleThisShow() {
        this.setState({show: !this.state.show});
    }
    
    getDeadlines () {
        if (!this.props.disabled && this.props.deadlines.length > 0) {
            let deadlinesSet = [];
            this.props.deadlines.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     deadlinesSet.push(<p key={item.id} onClick={this.toggleThisShow}> {item.title} {item.type}</p>);
                 }
            })
            return deadlinesSet;
        }
    }
                                
    getEvents () {
         if (!this.props.disabled && this.props.events.length > 0) {
            let eventsSet = [];
            this.props.events.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     eventsSet.push(<p key={item.id} onClick={this.toggleThisShow}> {item.title} {item.type}</p>);
                 }
            })
            return eventsSet;
        }
    }
                                
    getLectures() {
         if (!this.props.disabled && this.props.deadlines.length > 0) {
            let lecturesSet = [];
            this.props.lectures.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     lecturesSet.push(<p key={item.id} onClick={this.toggleThisShow}> {item.title} {item.type}</p>);
                 }
            })
            return lecturesSet;
        }
    }                         
                
    getWorkshops () {
         if (!this.props.disabled && this.props.deadlines.length > 0) {
            let workshopsSet = [];
            this.props.workshops.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     workshopsSet.push(<p key={item.id} onClick={this.toggleThisShow}> {item.title} {item.type}</p>);
                 }
            })
            return workshopsSet;
        }
    }  
    
     getWebinars () {
         if (!this.props.disabled && this.props.deadlines.length > 0) {
            let webinarsSet = [];
            this.props.webinars.map((item,i) => {
                 if (item.start.toString().slice(0,15) === this.props.date.toString().slice(0,15)) {
                     webinarsSet.push(<p key={item.id} onClick={this.toggleThisShow}> {item.title} {item.type}</p>);
                 }
            })
            return webinarsSet;
        }
                
    }                           
              
    render() {   
        let style = Object.assign(
            {}, 
            styles.common, 
            (this.props.disabled) ? styles.disabled : styles.real, 
            (this.props.today) ? styles.today : {}
	   )           
        return (
            <div style = {style} >
                <div style = {styles.content} >
                    {this.props.date.getDate()}
                </div>
                 <div style = {styles.contentContainer}>   
                    <div style = {styles.contentEvents}> 
                        {this.getEvents()}
                    </div>    
                    <div style = {styles.contentDeadlines}> 
                        {this.getDeadlines()}
                    </div>
                    <div style = {styles.contentLectures}> 
                        {this.getLectures()}
                    </div>
                    <div style = {styles.contentWorkshops}> 
                        {this.getWorkshops()}
                    </div>
                    <div style = {styles.contentWebinars}> 
                        {this.getWebinars()}
                    </div>  
                </div> 
                <Review 
                    show={this.state.show} 
                    toggleThisShow={this.toggleThisShow}
                />
            </div>
        )
    }
}

             
const styles = {
	common: {
        display: 'flex',
		boxSizing: 'border-box',
		display: 'inline-block',
		marginBottom: '-5px',
		overflow: 'hidden',
		padding: '5px 0',
		paddingTop: 100/7/2 + '%',
		position: 'relative',
		textAlign: 'left',
		width: 100/7 + '%'
	},
    
	real: {
		border: '1px solid ' + basicColors.borderColor,
		color: basicColors.mainColor
	},
    
	today: {
		background: basicColors.todayColor,
		zIndex: 1
	},
    
	disabled: {
		background: '#F8F8F8',
		border: '1px solid #F2F2F2',
		color: '#D2D2D2'
	},
    
	content: {
		position: 'absolute',
		padding: '5px',
		top: 0,
		right: 0
	},
    
    contentContainer: {
		position: 'absolute',
		padding: '5px',
		top: 0,
		left: 0
	},
    
    contentDeadlines: {
		background: basicColors.deadlinesColor
    }, 
    
    contentEvents: {
		background: basicColors.eventsColor
    }, 
     
    contentLectures: {
		background: basicColors.lecturesColor
    }, 
    
    contentWorkshops: {
		background: basicColors.workshopsColor
    }, 
    
    contentWebinars: {
		background: basicColors.webinarsColor
    }, 
}


 
    
export default DayView;
