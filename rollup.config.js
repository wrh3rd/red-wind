export default {

  input: 'src/index.js',
  output: [{
    file: 'dist/js/redwind.js',
    format: 'iife',
    name: 'redwind'
  }, {
    file: 'dist/cjs/redwind.js',
    format: 'cjs'
  }, {
    file: 'dist/es/redwind.js',
    format: 'es'
  }]

}
