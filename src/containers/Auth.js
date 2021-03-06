import React from 'react';
import { withCookies } from 'react-cookie';
import { utils as api } from '@vidijs/vidijs-api';

import { AUTH_TOKEN, AUTH_USERNAME } from '../const';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.setUserName = this.setUserName.bind(this);
    this.unsetUserName = this.unsetUserName.bind(this);
    this.setToken = this.setToken.bind(this);
    this.unsetToken = this.unsetToken.bind(this);
    const { cookies } = this.props;
    const token = cookies.get(AUTH_TOKEN, { path: '/' });
    const userName = cookies.get(AUTH_USERNAME, { path: '/' }); // This will return the string as "undefined"
    if (token) {
      api.defaultClient.defaults.headers.Authorization = `token ${token}`;
    }
    this.state = {
      token,
      userName: userName !== 'undefined' ? userName : undefined,
    };
  }

  setUserName(userName) {
    const { cookies } = this.props;
    cookies.set(AUTH_USERNAME, userName, { path: '/' });
    this.setState({ userName });
  }

  setToken(token) {
    const { cookies } = this.props;
    cookies.set(AUTH_TOKEN, token, { path: '/' });
    api.defaultClient.defaults.headers.Authorization = `token ${token}`;
    this.setState({ token });
  }

  unsetUserName() {
    const { cookies } = this.props;
    cookies.remove(AUTH_USERNAME, { path: '/' });
    this.setState({ userName: undefined });
    this.unsetToken();
  }

  unsetToken() {
    const { cookies } = this.props;
    cookies.remove(AUTH_TOKEN, { path: '/' });
    delete api.defaultClient.defaults.headers.Authorization;
    this.setState({ token: undefined });
  }

  render() {
    const { token, userName } = this.state;
    const { loginComponent: Login, appComponent: App, ...props } = this.props;
    return (
      token ? (
        <App
          userName={userName}
          unsetUserName={this.unsetUserName}
          unsetToken={this.unsetToken}
          {...props}
        />
      ) : (
        <Login
          userName={userName}
          setUserName={this.setUserName}
          setToken={this.setToken}
          {...props}
        />
      )
    );
  }
}

export default withCookies(Auth);
