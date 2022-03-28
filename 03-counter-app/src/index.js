import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';
// import CounterApp, {RelojApp} from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <FirstApp greet = 'Hello Im Goku'/> , divRoot);
// ReactDOM.render( <CounterApp value = {0} />, divRoot);
// ReactDOM.render( <RelojApp />, divRoot);