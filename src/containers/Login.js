import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Form } from 'react-final-form';

import LoginForm from '../forms/LoginForm';
import { onGetToken } from '../formactions/user';
import { remoteSubmit, onSubmitFeedback } from '../formutils';
import ThemeContext from '../context/ThemeContext';
import SnackbarContext from '../context/SnackbarContext';
import Header from '../components/Header';

const LOGINFORM = 'LOGINFORM';


function Login({
  userName,
  setUserName,
  setToken,
}) {
  const { theme } = React.useContext(ThemeContext);
  const { show } = React.useContext(SnackbarContext);
  const onSubmitSuccess = ({ token, userName: newUserName }) => {
    setUserName(newUserName);
    setToken(token);
  };
  const onSubmitError = () => show('Error Logging In', 'error');
  const onSubmit = onSubmitFeedback(onGetToken, onSubmitSuccess, onSubmitError);
  return (
    <Grid container style={{ height: '100vh', background: theme.palette.background.default }}>
      <Grid item lg={3}>
        <Header />
        <Grid container direction="column" justify="center" style={{ height: '80%' }}>
          <Grid item>
            <DialogContent>
              <Form
                formId={LOGINFORM}
                onSubmit={onSubmit}
                initialValues={{
                  userName,
                  queryParams: { seconds: 2592000, autoRefresh: 'true' },
                }}
                render={LoginForm}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={remoteSubmit(LOGINFORM)} fullWidth>
                {"Let's Go"}
              </Button>
            </DialogActions>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
