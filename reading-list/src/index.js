import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 18fc9a7e177b794d61d4635722a27ebc8d8e8443
