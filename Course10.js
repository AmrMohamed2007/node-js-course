const express = require("express");


const app = express();
const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
    
})


app.get("/hello" , (req, res) => {
    res.send("<h1>hello world</h1>")
})


