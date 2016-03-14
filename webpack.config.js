const  webpack = require("webpack");

const  appConfig = require("./app.config.js");

const NODE_ENV = process.env.NODE_ENV || appConfig.DEFOULT_NODE_ENV;

module.exports = {
    entry: "./app-dev/main.js",

    output: {
        path: __dirname + "/app-build",
        filename: "app-bundle.js",
        library: "myApp"
    },

    devtool: "#cheap-source-map",

    //watch: NODE_ENV == appConfig.DEFOULT_NODE_ENV,
    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANGUAGE: JSON.stringify(appConfig.DEFAULT_LANGUAGE)
        })
    ],

    module: {
        loaders: [
            {
                test: /\.es6\.js$/,
                loader: "babel-loader"
                //query: {
                //    presets: ['react', 'es2015']
                //}
            }
        ]
    }
};

