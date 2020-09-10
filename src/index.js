import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

import TwentyFortyEight from './Components/Games/TwentyFortyEight/TwentyFortyEight'

ReactDOM.render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  <TwentyFortyEight/>,
  document.getElementById('root')
);