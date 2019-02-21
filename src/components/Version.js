import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getVersion } from '../hooks/version';


export default function Version() {
  const versionDocument = getVersion();
  const { component = [] } = versionDocument;
  return (
    component.map(thisComponent => (
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography variant="body2">{thisComponent.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">{thisComponent.version}</Typography>
        </Grid>
      </Grid>
    ))
  );
}
