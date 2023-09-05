const fs = require('fs');
const concat = require('concat');

(async function build(){

    files = [
        './dist/app-element-one/main.js',
        './dist/app-element-one/polyfills.js',
        './dist/app-element-one/runtime.js'
    ]
    await concat(files, './dist/app-element-one/inputOutput.js')
    await fs.unlinkSync( './dist/app-element-one/main.js')
    await fs.unlinkSync('./dist/app-element-one/3rdpartylicenses.txt')
    await fs.unlinkSync('./dist/app-element-one/polyfills.js')
    await fs.unlinkSync('./dist/app-element-one/runtime.js')
})();