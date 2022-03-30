import baseConfig from '@jupyterlab/galata/lib/playwright-config';

module.exports = {
  ...baseConfig,
  timeout: 240000,
  use: {
    appPath: ''
  },
  retries: 1
};
