import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { store } from './examples/CounterApp';
import './index.css'

let root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => root.render(<React.StrictMode><App /></React.StrictMode>);

renderApp();
store.subscribe(renderApp)