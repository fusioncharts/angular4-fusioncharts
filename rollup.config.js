
export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/dist/index.umd.js',
        format: 'umd',
        name: 'ng.fusioncharts'
    },
    globals: {
        '@angular/core': 'ng.core'
    }
};