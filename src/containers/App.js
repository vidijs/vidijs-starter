import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Header from '../components/Header';
import ThemeContext from '../context/ThemeContext';
import DrawerContainer from '../components/DrawerContainer';
import System from './System';
import VidispineIcon from '../icons/Vidispine';


const listComponent = ({ location: { pathname } = {} }) => (
  <React.Fragment>
    <List>
      <ListItem>
        <ListItemIcon>
          <VidispineIcon style={{ height: 20, width: 20, marginLeft: 4 }} />
        </ListItemIcon>
        <ListItemText secondary="Vidispine" />
      </ListItem>
      <ListItem button component={Link} to="/system/" selected={pathname === '/system/' || pathname === '/'}>
        <ListItemIcon><Avatar style={{ height: 25, width: 25 }}>S</Avatar></ListItemIcon>
        <ListItemText primary="System" />
      </ListItem>
    </List>
  </React.Fragment>
);

const mainComponent = drawerProps => (
  <Switch>
    <Route path="/" exact render={props => <System {...drawerProps} {...props} />} />
    <Route path="/system/" exact render={props => <System {...drawerProps} {...props} />} />
  </Switch>
);

function App(props) {
  const { theme } = React.useContext(ThemeContext);
  const { unsetToken } = props;
  return (
    <>
      <Header unsetToken={unsetToken} />
      <div
        style={{
          paddingTop: theme.mixins.toolbar.minHeight - (theme.spacing.unit * 3),
          height: '100vh',
        }}
      >
        <Router>
          <Route
            path="/"
            render={renderProps => (
              <DrawerContainer
                {...renderProps}
                {...props}
                theme={theme}
                mainComponent={mainComponent}
                listComponent={listComponent}
              />
            )}
          />
        </Router>
      </div>
    </>
  );
}

export default App;
