const fs = require('fs');


fs.readFile('hello.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data, "dataa");
}); 


const data =  fs.readFileSync('hello.js', 'utf8');

console.log(data);
