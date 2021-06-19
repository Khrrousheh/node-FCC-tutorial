const os = require('os')

// info about curront user
const user = os.userInfo()
const osVersion = os.version()

// console.log(user)

// returns the system uptimes in second
console.log(`the System uptime is ${os.uptime()} in seconds`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    plaform: os.platform()
}

console.log(currentOS)