
// Import and Instantiate React and React-dom
import React from 'react';
import ReactDOM from 'react-dom';

// Import Main App
import App from './app.jsx';



// Attach App components to root of DOM
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);