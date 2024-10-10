const path = require('path');


module.exports = {
    entry: {
        home: './client/client.js',
        demo: './demo/demo.js'
    },
    mode: 'development',
    watchOptions: {
        aggregateTimeout: 200,
    },
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name].js',
    }
};
