import React, { Component } from 'react';
import ControlPanelMonth from './ControlPanelMonth';
import basicColors from '../data/styleData';

const styles = {
    control: {
        padding: '5px',
        marginBottom: '10px',
        textAlign: 'center'
    }
}

const ControlPanel = (props) => {
    console.log(props)
    return (
        <div style = {styles.control}>
            <ControlPanelMonth
                currentYear = {props.currentYear}
                currentMonth = {props.currentMonth}
            />
        </div>
    )
}

export default ControlPanel;
