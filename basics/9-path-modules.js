const path = require('path')

console.log(path.sep)
const filePath= path.join('/file','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname,'file','test.txt')
console.log(absolutePath)