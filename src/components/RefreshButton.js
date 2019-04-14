import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

export default function RefreshButton({ onClick, iconProps = {}, buttonProps = {} }) {
  return (
    <IconButton
      disableRipple
      color="inherit"
      onClick={onClick}
      {...iconProps}
    >
      <RefreshIcon fontSize="small" {...buttonProps} />
    </IconButton>
  );
}
