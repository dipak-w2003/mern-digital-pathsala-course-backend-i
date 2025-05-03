const epxress = require("express");
const app = epxress();
const db = require("./database/connection");
//app.get() : method graps 3 arguments : routes > request > response
console.log(process.env.data);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
