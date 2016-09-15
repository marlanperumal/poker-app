module.exports = {
    entry: {
        main: "./static/scripts/jsx/main.js",
        sandbox: "./static/scripts/jsx/sandbox.js"
    },
    output: {
        path: "./static/scripts/js",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};