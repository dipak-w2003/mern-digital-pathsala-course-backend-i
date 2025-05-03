const epxress = require("express");
const app = epxress();

//app.get() : method graps 3 arguments : routes > request > response

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



