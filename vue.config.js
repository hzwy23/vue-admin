module.exports = {

    devServer: {
        port: 8080,
        proxy: {
            '/': {
                // process.env.VUE_APP_BASE_API 替换成对应的后台服务地址
                target: "http://localhost:8080",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }
    
}