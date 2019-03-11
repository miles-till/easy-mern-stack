
module.exports = {
  outputDirectory: './build',
  webpackConfigModifier: defaultWebpackConfig => {
    defaultWebpackConfig.mode = 'production';
    defaultWebpackConfig.optimization = { minimize: false };
    defaultWebpackConfig.node = false;
    return defaultWebpackConfig;
  }
};
