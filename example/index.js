/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import CircleTree from './CircleTree';
import './reset.css';
import './app.css';


const appRoot = document.createElement(`div`);


appRoot.id = `app`;
document.body.appendChild(appRoot);
ReactDOM.render(<CircleTree />, appRoot);
