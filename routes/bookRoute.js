const express = require("express");
const router = express.Router();

// Import controller functions
const {
  fetchedBooks,
  addBook,
  deleteBook,
  updateBook,
  getBookById,
} = require("../controllers/bookController");

// Routes
router
  .route("/")
  .get(fetchedBooks) // GET /books
  .post(addBook); // POST /books

router
  .route("/:id")
  .get(getBookById)
  .delete(deleteBook) // DELETE /books/:id
  .patch(updateBook); // patch /books/:id

module.exports = router;
