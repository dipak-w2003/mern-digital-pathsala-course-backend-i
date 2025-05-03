const epxress = require("express");
const app = epxress();

//app.get() : method graps 3 arguments : routes > request > response
// home : /
app.get("/", (req, res) => {
  res.send("Hello, World, Home Page!");
});
app.get("/about", (req, res) => {
  res.send("Hello, World, About Page!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
