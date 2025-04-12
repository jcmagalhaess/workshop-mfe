const merge = require('concat');

const files = [
  './dist/remote-v8/polyfills-es5.js',
  './dist/remote-v8/runtime-es5.js',
  './dist/remote-v8/main-es5.js',
]

merge(files, './dist/remote-v8/wc-lib.js');

console.log('wc-lib.js criado com sucesso');
