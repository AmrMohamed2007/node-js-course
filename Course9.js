/**
 * Streams
 */

const fs = require("fs")

const readStream = fs.createReadStream("s.txt", "utf8")

readStream.on("data", chunk => {
    console.log(chunk)
})


readStream.on("end", () => {
    console.log("ended")
})

const writeStream = fs.createWriteStream("s.txt", "utf8")



writeStream.write("hello")
writeStream.write("world")
writeStream.write("world")
writeStream.write("world")
writeStream.write("world")
writeStream.write("world")
writeStream.end("Ened Data")