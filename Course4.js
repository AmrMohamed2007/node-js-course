const fs = require("fs");

/**
 * fs is a Node.js module that allows you to interact with the file system.
 * It provides a set of functions for reading, writing, and manipulating files and directories.
 */

fs.writeFile("hello.js", "console.log('Hello, World!');", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File created successfully!");
});