var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    mode:'production',
    performance:{hints:false},
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};