import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const defaultOptions = {
  open: false,
  message: '',
  options: {},
  color: '#313131',
  show: () => null,
};

const SnackbarContext = React.createContext(defaultOptions);

export function SnackbarProvider({ children }) {
  const [state, setState] = React.useState(defaultOptions);
  const handleClose = () => setState({ open: false });
  const handleShow = (message, type, options) => {
    const { open } = state;
    let color;
    switch (type) {
      case 'success':
        color = '#357a38';
        break;
      case 'warn':
        color = '#ffa000';
        break;
      case 'error':
        color = '#d32f2f';
        break;
      default:
        color = '#313131';
        break;
    }
    setState({
      open: !open,
      color,
      message,
      options,
    });
  };
  return (
    <SnackbarContext.Provider value={{ ...state, show: handleShow }}>
      <>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={state.open}
          autoHideDuration={3000}
          onClose={handleClose}
          {...state.options}
        >
          <SnackbarContent
            style={{ backgroundColor: state.color }}
            message={<span>{state.message}</span>}
            action={(
              <IconButton key="close" color="inherit" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            )}
          />
        </Snackbar>
        {children}
      </>
    </SnackbarContext.Provider>
  );
}


export default SnackbarContext;
