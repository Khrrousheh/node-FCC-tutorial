const {readFile, writeFile} = require('fs')
// using call back methods
readFile('./file/filesRW/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first= result;
    readFile('./file/filesRW/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        // console.log(result)
        const second= result;
       writeFile(
           './file/filesRW/result-async.txt',
           `\n \nHere is the result (appended) \n\t${first}\n\t${second}`
           ,{flag: 'a'},(err,result)=>{
               if(err){
                   console.log(err) 
                   return
                }
                console.log(result)
           }) 
    })
})