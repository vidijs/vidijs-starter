import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';

import './index.css';
import Auth from './containers/Auth';
import App from './containers/App';
import Login from './containers/Login';

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light',
  },
});

ReactDOM.render(
  <CookiesProvider>
    <MuiThemeProvider theme={muiTheme}>
      <Auth
        loginComponent={Login}
        appComponent={App}
        theme={muiTheme}
      />
    </MuiThemeProvider>
  </CookiesProvider>,
  document.getElementById('root'),
);
