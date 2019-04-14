import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export { MenuItem };

export default function MenuButton({
  children,
  iconButtonProps = {},
  iconComponent,
  ...props
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <IconButton
        onClick={handleClick}
        color="inherit"
        disableRipple
        {...iconButtonProps}
      >
        {iconComponent || <MoreVertIcon fontSize="small" />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{ top: 25 }}
        {...props}
      >
        {children}
      </Menu>
    </>
  );
}
