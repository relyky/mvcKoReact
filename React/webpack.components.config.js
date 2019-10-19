const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        TestWidget: './src/js/components/widget/TestWidget.jsx',
    },
    output: {
        //path: path.resolve(__dirname, './bundle/'),
        path: path.resolve(__dirname, '../mvcKoReact/Scripts/bundle/'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
};