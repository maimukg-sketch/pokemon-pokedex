import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lesson7_4 from './Lesson7-4';
import Lesson7_5 from './Lesson7-5';
import Lesson7_6 from './Lesson7-6';
import Lesson7_7 from './Lesson7-7';
import Lesson7_8 from './Lesson7-8';
import Lesson7_9 from './Lesson7-9';
import Lesson7_10 from './Lesson7-10';
import reportWebVitals from './reportWebVitals';
import AppForm from './AppForm';
import AppDisplay from './AppDisplay';
import AppLayout from './AppLayout';
import AppNavigation from './AppNavigation';
import AppTheme from './AppTheme';
import AppIcon from './AppIcon';
import PokeApp from './Lesson7-11/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PokeApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
