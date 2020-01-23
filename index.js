const fs = require('fs')

console.log('before readfile')

fs.readFile('./hello-world.txt', 'utf8', (err, contents) => {
  if(err) {
    throw err
  }
  else {
    console.log('inside readfile', contents)
  }
})

console.log('after readfile')
