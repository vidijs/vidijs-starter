const proxy = require('http-proxy-middleware'); // eslint-disable-line import/no-extraneous-dependencies

const VIDISPINE_ENDPOINTS = [
  '/API/',
  '/APInoauth/',
  '/APIinit/',
  '/APIdoc/',
  '/UploadLicense/',
];

const target = process.env.REACT_APP_VIDISPINE_URL || 'http://localhost:8080/';
const onProxyRes = proxyRes => delete proxyRes.headers['www-authenticate']; // eslint-disable-line no-param-reassign

const options = {
  target,
  onProxyRes,
  changeOrigin: true,
};

function useProxy(app) {
  app.use(proxy(VIDISPINE_ENDPOINTS, options));
}

module.exports = useProxy;
