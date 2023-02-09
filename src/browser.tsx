import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Define a new <div> element and inject it to the DOM's <body>
const appTarget = document.createElement('div');
document.body.appendChild(appTarget);

// Define root context using the previously created <div> as a target
const root = createRoot(appTarget);

// Render the app
root.render(<App/>)
