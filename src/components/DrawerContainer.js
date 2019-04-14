import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 5,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 7,
    },
  },
});


function DrawerContainer({
  classes,
  theme,
  listComponent: ListComponent,
  mainComponent: MainComponent,
  ...props
}) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div style={{ minHeight: theme.mixins.toolbar.minHeight }} />
        <ListItem
          button
          onClick={open ? handleDrawerClose : handleDrawerOpen}
          disableRipple
        >
          <ListItemIcon>{open ? <ChevronLeftIcon /> : <MenuIcon />}</ListItemIcon>
        </ListItem>
        <Divider />
        <ListComponent {...props} />
      </Drawer>
      <div
        style={{
          flexGrow: 1,
          padding: theme.spacing.unit * 3,
        }}
      >
        <MainComponent theme={theme} {...props} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DrawerContainer);
