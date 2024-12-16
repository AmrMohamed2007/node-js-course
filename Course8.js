const fs = require("fs")

fs.readdir("s", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  if(files.length == 0) {
    console.log("No files found");
    return;
  }

  const FiltredFilds = files.filter((file) => file.endsWith(".js"));

  console.log(FiltredFilds);
});