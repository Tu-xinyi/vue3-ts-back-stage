const path = require('path')

module.exports = {
  // npm run build 打包 导出的文件夹名称
  outputDir: './build',
  // 打包后浏览器找不到文件 改成相对路径 publicpath
  // publicPath: './'
  //对象会合并到webpack配置中
  // 配置方式一 ：对象
  // configureWebpack: {
  // 路径
  //   resolve: {
  //     alias: {
  // 默认下的@对应src
  //       components:'@/component'
  //       views: '@/views'
  //     }
  //   }
  // }
  // 配置方式二 ：函数
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // 方式三 ： 链式编程
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
