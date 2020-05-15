module.exports = {
    proxy: {
        '/api': {    //将api.yixiu08.com/well印射为/apis
            target: 'http://api.yixiu08.com/well',  // 接口域名
            // target: 'http://testshortvideo.com/well',  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/api': ''   //需要rewrite的,
            }              
        }
    }
  }