import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
const appContainer = document.getElementById('app-container');
if (!appContainer) {
    throw new Error('No element with id app-container found');
}
ReactDOM.createRoot(appContainer).render(<App />);