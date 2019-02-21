import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Form } from 'react-final-form';

import VidispineIcon from '../icons/Vidispine';
import LoginForm from '../forms/LoginForm';
import { GIT_COMMIT } from '../const';
import { onGetToken } from '../formactions/user';
import { remoteSubmit, onSubmitFeedback } from '../formutils';


const LOGINFORM = 'LOGINFORM';


function Login({
  userName,
  setUserName,
  setToken,
  theme,
}) {
  const onSubmitSuccess = ({ token, userName: newUserName }) => {
    setUserName(newUserName);
    setToken(token);
  };
  const onSubmit = onSubmitFeedback(onGetToken, onSubmitSuccess);
  return (
    <Grid container style={{ height: '100vh', background: theme.palette.background.default }}>
      <Grid item lg={3} style={{ background: theme.palette.background.paper }}>
        <Toolbar disableGutters variant="dense" style={{ backgroundColor: theme.palette.common.black, color: theme.palette.common.white }}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Grid container direction="row">
                <VidispineIcon />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" style={{ fontWeight: 'bold', marginRight: 5 }}>{`v.${GIT_COMMIT}`}</Typography>
            </Grid>
          </Grid>
        </Toolbar>
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
