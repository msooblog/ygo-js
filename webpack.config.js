//console.log(require('babel'))
module.exports = {
    entry: {
        deck : './deck/entry.js'
    },
    output: {
        path: __dirname,
        filename: "/src/js/[name].entry.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/
                , loader: "style!css" 
            },{
		      test: /\.js?$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a legal name to reference
		      query: {
		        presets: [ 'es2015']
		      }
		    },{
                test: /\.vue$/
                , loader: "vue-loader" 
            }
        ]
    }
    ,devtool: 'source-map'
}