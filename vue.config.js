const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const server = {
    target: 'http://172.16.16.8', // .8开发环境  .11 测试环境
    secure: false
};
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/sass/variable.scss";'
            }
        }
    },
    devServer: {
        proxy: {
            '/user_api': {
                target: server.target,
                changeOrigin: true,
                secure: server.secure
            }
        }
    },
    configureWebpack: config => {
        // 生产模式
        if (process.env.NODE_ENV === 'production') {
            // 打包生产.gz包
            return {
                plugins: [new CompressionPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                })]
            };
        };
        config.plugins.push(new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')]
        }));
    },
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 192 //代表的是 1rem = ？px  这里假设设计稿是 1920px ，那么这里的比例就是 1/10
            })
            .end()
    }
};