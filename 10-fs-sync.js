const {readFileSync, writeFileSync} = require('fs')
console.log('Start Synchronous task')
const firstFile = readFileSync('./file/filesRW/first.txt','utf-8')
const secondFile = readFileSync('./file/filesRW/second.txt','utf-8')
// console.log(firstFile, secondFile)
writeFileSync(
    './file/filesRW/result-sync.txt',
    `\n \nHere is the result (appended) \n\t${firstFile}\n\t${secondFile}`
    ,{flag: 'a'}
    )
console.log('Done with Synchronous task')
console.log('Ready for the next task')