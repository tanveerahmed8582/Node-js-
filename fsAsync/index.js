const fs = require("fs")

// fs.writeFile('read.txt', "Today is awesome day :", (err) => {
//   console.log("file is created")
//   console.log(err)
// })

// We pass them a function as an argument - a callback - 
// that gets called when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it's nothing), and start
//   checking for errors.

// fs.appendFile('read.txt', " Hello, How are you?", (err) => {
//   console.log("Data is successfully added")
// console.log(err)
// })

fs.readFile('read.txt', 'UTF-8', (err, data) => {
  console.log(data)
})