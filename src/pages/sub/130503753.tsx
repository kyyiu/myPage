export default `
# webpack
<pre>
<code>
mode: 'production',
context,
entry: './entry.js',
output: {
    publicPath: 'dist/',
    path: path.resolve(context, 'dist'),
    ...(output || {})
},
optimization: {
    minimize: true,
    minimizer: [
    new TerserPlugin({
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    })
    ]
},
plugins: plugins || []
</code>
</pre>

# cra , customize-cra和react-app-rewired
<pre>
<code>
override(
    addWebpackPlugin(new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
                drop_debugger: true,
                drop_console: true
            }
        }
    })
)
</pre>
</code>

# vue-cli

<pre>
<code>
defineConfig({
    terser: {
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
})
</code>
</pre>

# vite

<pre>
<code>
build: {
    minify: 'terser',
    terserOptions: {
        compress: {
            drop_console: true,
            drop_debugger: true
        }
    }
}
</code>
</pre>
`