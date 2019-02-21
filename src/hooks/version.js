import { useState, useEffect } from 'react';
import { version as api } from '@vidijs/vidijs-api';


export function getVersion() { // eslint-disable-line import/prefer-default-export
  const [versionDocument, setVersionDocument] = useState({});
  const onGetVersion = () => {
    api.getVersion()
      .then(({ data }) => {
        setVersionDocument(data);
      });
  };
  useEffect(() => onGetVersion(), []);
  return versionDocument;
}
