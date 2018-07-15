module.exports = (api, projectOptions) => {
  api.chainWebpack(config => {
    config.resolve.extensions.add('.yml').add('.yaml')
    config.module
      .rule('yaml')
        .test(/\.ya?ml?$/)
        .use('json-loader')
          .loader('json-loader')
        .end()
        .use('yaml-loader')
          .loader('yaml-loader')
        .end()
  })
}
