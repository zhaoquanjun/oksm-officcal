
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  runtimeCompiler: true,
  chainWebpack: config => {
    // 生产环境配置
    if (isProduction) {
      // 压缩代码
      config.optimization.minimize(true)
      config.optimization.delete('splitChunks')
    }
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@v', resolve('src/views'))
      .set('@c', resolve('src/components'))
      .set('@a', resolve('src/assets'))
      .set('@s', resolve('static'))
      .set('@api', resolve('src/api'))
      .set('@u', resolve('utils'))
  },
}


