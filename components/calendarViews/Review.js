import React, { Component } from 'react';
import basicColors from '../data/styleData';
import { months } from '../data/timeData';

const styles = {
	backdrop: {
		background: '#000',
		height: '100%',
		left: 0,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: '998',
        cursor: 'default',
        display: 'flex',
        justifyContent: 'center',
	},

    modal: {
        padding: '10px 10px 20px 60px',
        background: '#FFF',
		position: 'fixed',
		top: '-20px',
        height: '100%',
		width: '300px',
		zIndex: '999',
        overflowY: 'scroll',
        overflowX: 'hidden',
        cursor: 'default',
    },

    textArea: {
        borderTop: '1px solid #9b9b9b',
    },

    buttonClose: {
        margin: '0 auto',
        width: '100px',
        height: '25px',
        borderRadius: '5px',
        display: 'block',
        cursor: 'pointer',
    },

    overflowField: {
        display: 'block',
        overflow: 'auto',
        height: '50px',
    },
};

class Review extends Component {
	constructor(props) {
		super(props);
        this.checkTaskTemplate = this.checkTaskTemplate.bind(this);
        this.checkWebinarTemplate = this.checkWebinarTemplate.bind(this);
        this.checkEventTemplate = this.checkEventTemplate.bind(this);
        this.transformDuration = this.transformDuration.bind(this);
	}
    
    transformDuration() {
        if (this.props.duration) {
            const date = new Date(this.props.duration);
            const h = date.getHours();
            const m = date.getMinutes();
            const s = date.getSeconds();
            return <h4> Duration: {h}h {m}m </h4>
        }
    }

    checkLocation() {
        if (this.props.location) {
            return <h4>Location: {this.props.location}</h4>
        }
    }
    
    stopBubbling(event) {
        event.stopPropagation();
    }
    
    makeSpeakers() {
        if (this.props.webinarTemplate) {
            let speakersSet = [];
            let arr3 = this.props.trainers.filter(function(item) {
                return this[item.id];
            },
            this.props.speakers.reduce(function (obj, item) {
                return obj[item] = 1, obj;
            }, {}));
            arr3.map((item,i) => {
                speakersSet.push(
                    <div key={i}>
                        <p>{item.name}</p>
                        <p key={i} style={styles.overflowField}>{item.avatar}</p>
                    </div>
                )
            })
            return speakersSet;
        }
    }
    
    checkTaskTemplate() {
        if (this.props.taskTemplate) {
            return (
                <div className='my-map'>
                    <h4>Name: {this.props.taskTitle}</h4>
                    <h4 style={styles.overflowField}>Description: {this.props.description}</h4>
                    <h4>The person checks: {this.props.whoChecks}</h4>
                    <h4>Uploading place: {this.props.upload}</h4>
                    <h4>Criteria for evaluation: {this.props.criteria}</h4>
                    <h4>Deadline: {this.props.deadline}</h4>
                    <form action="" method="post">
                        <p><b>Your comment:</b></p>
                        <p><textarea rows="10" cols="35" name="text" style={styles.textArea}></textarea></p>
                        <p><input type="submit" value="Surprise us"/></p>
                    </form>
                    <button type="button" style={styles.buttonClose} onClick={this.props.toggleThisShow}>Close</button>
                </div>
            );
        }
    }

    checkWebinarTemplate() {
        if (this.props.webinarTemplate) {
            return (
                <div>
                    <h4>Name: {this.props.taskTitle}</h4>
                    <h4>Time: {this.props.time}</h4>
                    {this.checkLocation()}
                    <h4>Video: {this.props.video}</h4>
                    <h4>Slides: {this.props.slides}</h4>
                    <h4>Plan: {this.props.plan}</h4>
                    <h4>Speakers: {this.makeSpeakers()}</h4>
                    {this.transformDuration()}
                    <form action="" method="post">
                        <p><b>Your comment:</b></p>
                        <p><textarea rows="10" cols="35" name="text" style={styles.textArea}></textarea></p>
                        <p><input type="submit" value="Surprise us"/></p>
                    </form>
                    <button type="button" style={styles.buttonClose} onClick={this.props.toggleThisShow}>Close</button>
                </div>
            )
        }
    }

    checkEventTemplate() {
        if (this.props.eventTemplate) {
            return (
                <div>
                    <h4><span style={styles.text}>name:</span>{this.props.taskTitle}</h4>
                    <h4 style={styles.overflowField}>Description:{this.props.description}</h4>
                    <h4>Time: {this.props.time}</h4>
                    {this.checkLocation()}
                    <h4>Plan: {this.props.plan}</h4>
                    {this.transformDuration()}
                    <form action="" method="post">
                        <p><b>Your comment:</b></p>
                        <p><textarea rows="10" cols="35" name="text" style={styles.textArea}></textarea></p>
                        <p><input type="submit" value="Surprise us"/></p>
                    </form>
                    <button type="button" style={styles.buttonClose} onClick={this.props.toggleThisShow}>Close</button>
                </div>
            )
        }
    }
    
	render() {
		return (
			<div style={{display: (this.props.show === true) ? 'block' : 'none'}}>
				<div style={styles.backdrop} onClick={this.props.toggleThisShow}>
                    <div style={styles.modal} className='modal-box' onClick={this.stopBubbling}>
                        {this.checkTaskTemplate()}
                        {this.checkWebinarTemplate()}
                        {this.checkEventTemplate()}
                    </div>
                </div>
			</div>
		);
	}
}

export default Review;
