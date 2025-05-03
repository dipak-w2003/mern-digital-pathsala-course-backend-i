const epxress = require("express");
const app = epxress();
const db = require("./database/connection");
//app.get() : method graps 3 arguments : routes > request > response
console.log(process.env.data);
// READ
app.get("/books", (req, res) => {
  res.json({
    message: "books fetched successfully!",
  });
});
// DELETE
app.delete("/books/:id", (req, res) => {
  res.json({
    message: "book deleted successfully!",
  });
});

// ADD
app.post("/books/:id", (req, res) => {
  res.json({
    message: "book added successfully!",
  });
});
// UPDATE
app.patch("/books/:id", (req, res) => {
  res.json({
    message: "book updated successfully!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
