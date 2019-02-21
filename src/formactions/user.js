import { user as api } from '@vidijs/vidijs-api';
import VidiError from '../error/VidiError';

export function onGetToken(values) { // eslint-disable-line import/prefer-default-export
  const {
    userName,
    password,
    headers = {},
    queryParams,
  } = values;
  return api.getToken({
    userName,
    queryParams,
    headers: { password, username: userName, ...headers },
  })
    .then(({ data: token }) => ({ token, userName }))
    .catch((error) => {
      throw new VidiError(error);
    });
}
