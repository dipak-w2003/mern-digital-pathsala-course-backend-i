// books: Name, Price, Author, Genre
const bookModel1 = (sequelize, DataTypes) => {
  // Define the "book" table
  const Book = sequelize.define("book", {
    // Book name - required
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Book price - required
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Genre of the book - optional
    bookGenre: {
      type: DataTypes.STRING,
    },
    // Author name - optional, with a default value
    bookAuthor: {
      type: DataTypes.STRING,
      defaultValue: "unknown-book-author",
    },
  });

  return Book;
};

module.exports = bookModel1;
