import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Version from '../components/Version';

function App({ unsetToken }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item xs="auto">
        <Card>
          <CardHeader
            title="Welcome!"
            action={(
              <Button
                onClick={unsetToken}
                variant="outlined"
                color="secondary"
              >
                Logout
              </Button>
            )}
          />
          <CardContent>
            <Version />
            <p>
              Edit
              <code> src/containers/App.js </code>
              and save to reload.
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
