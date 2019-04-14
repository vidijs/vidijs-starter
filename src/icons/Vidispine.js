import React from 'react';
import VidispineBlack from './VidispineBlack.png';
import VidispineWhite from './VidispineWhite.png';
import ThemeContext, { LIGHT_PALETTE } from '../context/ThemeContext';

function Vidispine(props) {
  const { palette } = React.useContext(ThemeContext);
  let { color } = props;
  if (!color) {
    color = palette === LIGHT_PALETTE ? 'black' : 'white';
  }
  const src = color === 'black' ? VidispineBlack : VidispineWhite;
  return (
    <img style={{ marginLeft: 10, marginRight: 10 }} src={src} alt="" height="20" {...props} />
  );
}

export default Vidispine;
