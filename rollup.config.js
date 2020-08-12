export default {

  input: 'src/index.js',
  output: [{
    file: 'dist/js/red-wind.js',
    format: 'iife',
    name: 'redwind'
  }, {
    file: 'dist/cjs/red-wind.js',
    format: 'cjs'
  }, {
    file: 'dist/es/red-wind.js',
    format: 'es'
  }]

}
