module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'https://app.codegra.de',
                    changeOrigin: true,
                },
            },
        },
    },
};
