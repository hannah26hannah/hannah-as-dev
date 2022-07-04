const { withContentlayer } = require('next-contentlayer');

const defaultConig = {
  basePath: '',
};
module.exports = withContentlayer()(defaultConig);
