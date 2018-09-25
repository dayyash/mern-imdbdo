import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieBox from './MovieBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieBox />, document.getElementById('root'));
registerServiceWorker();
