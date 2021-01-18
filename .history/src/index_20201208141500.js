import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // named export
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers'; // unamed export

ReactDOM.render(<App />, document.querySelector('#root'));
