import { useState } from 'react';
import { version as api } from '@vidijs/vidijs-api';


export function getVersion(initialState) { // eslint-disable-line import/prefer-default-export
  const [versionDocument, setVersionDocument] = useState(initialState || {});
  const onGetVersion = () => {
    api.getVersion()
      .then(({ data }) => {
        setVersionDocument(data);
      });
  };
  return [versionDocument, onGetVersion];
}
