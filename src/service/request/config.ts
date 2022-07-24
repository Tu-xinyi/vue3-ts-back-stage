// 环境 生产环境 测试环境 开发环境

/* // 开发
const BASE_URL = 'http://coderwhy.org/dev'
const BASE_NAME = 'coderwhy'
// 生产
const BASE_URL = 'http://coderwhy.org/prod'
const BASE_NAME = 'coderwhy'
// 测试
const BASE_URL = 'http://coderwhy.org/test'
const BASE_NAME = 'coderwhy' */

//方式一：手动切换
//方式二：process.env.NODE_ENV   Defineplugin插件为不同的环境注入不同的值
// let BASE_URL = ''
// let BASE_NAME = ''
// if (process.env.NODE_ENV == 'development') {
//   BASE_URL = 'http://coderwhy.org/dev'
//   BASE_NAME = 'development'
// } else if (process.env.NODE_ENV == 'production') {
//   BASE_URL = 'http://coderwhy.org/prod'
//   BASE_NAME = 'production'
// } else {
//   BASE_URL = 'http://coderwhy.org/test'
//   BASE_NAME = 'test'
// }

// export { BASE_URL, BASE_NAME }
// 方式三 ： 手动创建环境变量 .env
