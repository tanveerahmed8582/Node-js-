const fs = require('fs');

fs.mkdir("Tanveer", (err) => {
  //console.log("Folder is successfully created")
});

fs.writeFile('./Tanveer/bio.txt', "Hello guys, My name is Tanveer Ahmed", () => {
console.log("file created");
})

