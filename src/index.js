import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//React + DOM
ReactDOM.render(
  // <React.StrictMode> : 개발모드에서만 경고문구 넣어주는역할, prodction line은 노상관
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root') // (DOM) == <div id ='root'></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
