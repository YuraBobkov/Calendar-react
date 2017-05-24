import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Calendar from './components/Calendar';

ReactDOM.render((<Calendar />), document.querySelector('#app'));
