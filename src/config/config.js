const configs = {
  development: {
    env: 'development',
    protocol: 'https',
    port: '443',
    hostname: 'localhost',
    assetUrl: '',
    webAssetUrl: ''
  },
  qa: {},
  production: {},
  test: {
    env: 'test',
    protocol: 'http',
    port: '5000',
    hostname: 'localhost',
    assetUrl: '',
    webAssetUrl: ''
  }
};

module.exports = configs[process.env.NODE_ENV || 'development'];
