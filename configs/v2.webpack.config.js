// webpack.config.js
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    // Or: To strip all locales except “en”, “es-us”
    // (“en” is built into Moment and can’t be removed)
    new MomentLocalesPlugin({
      localesToKeep: ['es-us'],
    }),

    new MomentTimezoneDataPlugin({
      matchZones: 'Asia/Karachi' // e.g To keep Pakistan timezone
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'v2.benchmark.html',
      openAnalyzer: true,
    }),
  ],
};

