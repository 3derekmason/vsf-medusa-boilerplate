import path from 'path';

export default function integrationModule(moduleOptions) {
  this.extendBuild((config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@vue-storefront/medusa-api$'] = require.resolve('@vue-storefront/medusa-api');
  });

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.js'),
    options: moduleOptions
  });
}
