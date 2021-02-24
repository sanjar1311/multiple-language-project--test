import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ContextProvider } from "./LangContext"
import { ThemeProvider } from "./ThemeContext"

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);