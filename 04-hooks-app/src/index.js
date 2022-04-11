import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { Message } from './components/02-useEffect/Message';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<FormWithCustomHook />);