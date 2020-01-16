// Dependencies
import React from 'react';
import { render } from 'react-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/global.pcss';

// Components
import App from './App';

render(<App />, document.querySelector('#root'));
