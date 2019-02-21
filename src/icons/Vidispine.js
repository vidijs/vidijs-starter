import React from 'react';
import VidispineBlack from './VidispineBlack.png';
import VidispineWhite from './VidispineWhite.png';

function Vidispine(props) {
  let src = VidispineWhite;
  const { color = 'white' } = props;
  if (color === 'black') { src = VidispineBlack; }
  return (
    <img style={{ marginLeft: 10, marginRight: 10 }} src={src} alt="" height="20" {...props} />
  );
}

export default Vidispine;
