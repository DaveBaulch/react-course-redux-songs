import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { selectSong } from '../actions'; // named export
import { songReducer } from '../reducers';


ReactDOM.render(<App />, document.querySelector('#root'));
