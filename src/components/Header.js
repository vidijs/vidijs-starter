import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import deepPurple from '@material-ui/core/colors/deepPurple';

import VidispineIcon from '../icons/Vidispine';
import { GIT_COMMIT } from '../const';
import ThemeContext, { DEFAULT_PALETTE } from '../context/ThemeContext';
import MenuButton, { MenuItem } from './MenuButton';

export default function Header({ unsetToken }) {
  const { theme, togglePalette, palette } = React.useContext(ThemeContext);
  return (
    <AppBar position="fixed" style={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar
        disableGutters
        variant="dense"
        style={{
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          paddingRight: 10,
          paddingLeft: 10,
        }}
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <Grid container direction="row">
                  <VidispineIcon color="white" />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="caption" color="inherit" style={{ fontWeight: 'bold', marginRight: 5 }}>
                  {`v.${GIT_COMMIT}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item />
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                {unsetToken && (
                  <MenuButton
                    iconComponent={(
                      <Avatar
                        style={{
                          height: 28,
                          width: 28,
                          padding: 0,
                          color: '#fff',
                          backgroundColor: deepPurple[500],
                        }}
                      >
                        A
                      </Avatar>
                    )}
                  >
                    <MenuItem disabled selected={false} />
                    <MenuItem selected={false}>
                      <FormControlLabel
                        label="Theme"
                        control={(
                          <Switch
                            onChange={togglePalette}
                            checked={palette === DEFAULT_PALETTE}
                          />
                        )}
                      />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={unsetToken}><Typography color="secondary">Logout</Typography></MenuItem>
                  </MenuButton>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
