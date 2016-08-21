module.exports = {
    entry: [
        "./static/scripts/jsx/main.js",
    ],
    output: {
        path: "./static/scripts/js",
        filename: "main.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};