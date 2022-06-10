const express = require("express");
const app = express();
let port  = process.env.PORT || 3000;
//const importData = require("./data.json");

app.get("/" , (req , res ) => {
    res.send("Hello WORLD")
});

/*app.get("/players" , (req , res) =>{
    res.send(importData);
}
); */

app.listen(port, () =>{
// eslint-disable-next-line no-template-curly-in-string
console.log('Example app is listening on port http://localhost:${port}');
});

