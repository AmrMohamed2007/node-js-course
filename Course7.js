const fs = require("fs");


fs.appendFile("hello.txt", "\nHelllo World!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File Edited successfully!");
});


const data = fs.readFileSync("hello.txt", "utf8");




const newData = data + "\\nHello World"

console.log(newData);


fs.writeFileSync("hello.txt", newData);
