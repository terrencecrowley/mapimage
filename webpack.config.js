var path = require('path');
var fs = require('fs');
var externalModules = { };
fs.readdirSync('node_modules/@terrencecrowley')
  .forEach((mod) => {
    mod = '@terrencecrowley/' + mod;
    externalModules[mod] = 'commonjs ' + mod;
  });

var libConfig = {
    entry: {
      library: './lib/all.ts'
	  },
    target: 'node',
    mode: 'development',
    output: {
        library: 'mapimage',
        libraryTarget: 'umd',
        path: __dirname + '/dist',
        filename: 'mapimage.js'
    },

    // Enable source maps
    devtool: "source-map",

    externals: externalModules,

    module: {
		rules: [
			{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.node$/, loader: 'node-loader' },
			{ test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
		]
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    }

};

var testConfig = {
    entry: './test/test.ts',
    target: 'node',
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        filename: 'test.js'
    },

    // Enable source maps
    devtool: "source-map",

	externals: { },
		

    module: {
		rules: [
			{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.node$/, loader: 'node-loader' },
			{ test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
		]
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    }

};

module.exports = [ libConfig, testConfig ];
