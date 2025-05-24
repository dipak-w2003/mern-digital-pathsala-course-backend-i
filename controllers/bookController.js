const { Book } = require("../database/connection");

// READ
const fetchedBooks = async (req, res) => {
  try {
    const fetchedBooks = await Book.findAll();
    console.log(fetchedBooks);

    res.status(200).json({
      message: "Books fetched successfully!",
      fetchedBooks,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Book." });
  }
};

// ADD
const addBook = async (req, res) => {
  const { bookName, bookPrice, bookGenre, bookAuthor } = req.body;
  console.log(req.body);
  if (!bookName || !bookPrice || !bookGenre || !bookAuthor) {
    return res.status(400).json({ error: "All fields are required." });
  }
  try {
    await Book.create({ bookName, bookPrice, bookGenre, bookAuthor });

    res.status(201).json({ message: "Book added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add book." });
  }
};

// DELETE
const deleteBook = async (req, res) => {
  // Access param for deletion throughout `id`
  const { id } = req.params;
  try {
    const deleted = await Book.destroy({ where: { id } });

    if (deleted) {
      res.status(200).json({ message: "Book deleted successfully!" });
    } else {
      res.status(404).json({ error: "Book not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book." });
  }
};

// UPDATE
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { bookName, bookPrice, bookGenre, bookAuthor } = req.body;

  try {
    // Attempt to update the book with the provided fields, where the ID matches
    const updated = await Book.update(
      { bookName, bookPrice, bookGenre, bookAuthor },
      { where: { id } }
    );

    /*
      Sequelize's update() method returns an array:
      - updated[0] is the number of rows that were updated in the database.
      So:
      - If updated[0] > 0, it means the update was successful (book existed and was changed).
      - If updated[0] === 0, it means either:
          a) No book with the given ID exists.
          b) The book exists, but the provided data is the same as the current data (no change made).
    */
    if (updated[0] > 0) {
      res.status(200).json({ message: "Book updated successfully!" });
    } else {
      res.status(404).json({ error: "Book not found or no change made." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update book." });
  }
};

// GRAB Book By Id "Param"
const getBookById = async (req, res) => {
  try {
    console.log(req.params.id);
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Export as object
module.exports = {
  fetchedBooks,
  addBook,
  deleteBook,
  updateBook,
  getBookById,
};
