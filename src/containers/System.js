import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import { getVersion } from '../hooks/version';
import RefreshButton from '../components/RefreshButton';

export default function System() {
  const [versionDocument, onGetVersion] = getVersion();
  const onRefresh = () => onGetVersion();
  React.useEffect(onRefresh, []);
  const { component = [] } = versionDocument;
  return (
    <Card style={{ minHeight: 250 }}>
      <CardHeader
        title="System"
        action={(
          <RefreshButton onClick={onRefresh} />
        )}
      />
      <CardContent>
        <List dense disablePadding>
          {component.map(thisComponent => (
            <ListItem dense disableGutters key={thisComponent.name}>
              <ListItemText primary={thisComponent.name} secondary={thisComponent.version} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
