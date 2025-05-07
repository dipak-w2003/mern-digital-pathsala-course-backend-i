const express = require("express");
const router = express.Router();

// Import controller functions
const {
  fetchedBooks,
  addBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

// Routes
router
  .route("/")
  .get(fetchedBooks) // GET /books
  .post(addBook); // POST /books

router
  .route("/:id")
  .delete(deleteBook) // DELETE /books/:id
  .put(updateBook); // PUT /books/:id

module.exports = router;
