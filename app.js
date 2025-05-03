const epxress = require("express");
const app = epxress();
app.use(epxress.json());
// app.use(epxress.json()) => Helps to read/receive parsed json/data without error/undefined

const { books } = require("./database/connection");

//app.get() : method graps 3 arguments : routes > request > response
// READ
app.get("/books", async (req, res) => {
  const fetchedBooks = await books.findAll();
  // grabs an array
  //  select *  from books
  console.log(fetchedBooks);

  res.json({
    message: "books fetched successfully!",
    fetchedBooks,
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
  const postedData = req.body;
  console.log(postedData);

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
