const FileManagerPlugin = require('filemanager-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['html', 'js', 'css', 'svg'];

module.exports = {
  lintOnSave: false,
  chainWebpack(config) {
    config
      .plugin('compression')
      .use(CompressionWebpackPlugin, [
        {
          filename: '[path][base].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192,
          minRatio: 0.8,
        },
      ])
      .end();
    const distPath = './dist';
    const tempDistPath = './tempdir';
    config
      .plugin('fileManager')
      .use(FileManagerPlugin, [
        {
          events: {
            onEnd: {
              mkdir: [tempDistPath, distPath],
              copy: [{ source: distPath, destination: './dist' }],
              archive: [
                {
                  source: tempDistPath,
                  destination: './release/test.zip',
                  format: 'zip',
                },
                {
                  source: distPath,
                  destination: './dist/test.zip',
                  format: 'zip',
                },
              ],
              delete: [tempDistPath],
            },
          },
        },
      ])
      .end();
  },
};
