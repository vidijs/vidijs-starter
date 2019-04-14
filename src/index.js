import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import 'typeface-roboto';

import './index.css';
import Auth from './containers/Auth';
import App from './containers/App';
import Login from './containers/Login';
import { ThemeProvider } from './context/ThemeContext';
import { SnackbarProvider } from './context/SnackbarContext';


ReactDOM.render(
  <CookiesProvider>
    <ThemeProvider>
      <SnackbarProvider>
        <Auth
          loginComponent={Login}
          appComponent={App}
        />
      </SnackbarProvider>
    </ThemeProvider>
  </CookiesProvider>,
  document.getElementById('root'),
);
