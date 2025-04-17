let books = [
  { id: '1', title: 'Node.js Essentials', author: 'John Doe', year: 2021 },
  { id: '2', title: 'Express in Action', author: 'Evan Hahn', year: 2016 }
];

// GET all books
const getAllBooks = (req, res) => {
  res.json(books);
};

// GET a specific book
const getBookById = (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

// POST a new book
const addBook = (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const newBook = {
    id: (books.length + 1).toString(),
    title,
    author,
    year: parseInt(year)
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

// PUT update a book
const updateBook = (req, res) => {
  const bookIndex = books.findIndex(b => b.id === req.params.id);
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  books[bookIndex] = { ...books[bookIndex], title, author, year: parseInt(year) };
  res.json(books[bookIndex]);
};

// DELETE a book
const deleteBook = (req, res) => {
  const bookIndex = books.findIndex(b => b.id === req.params.id);
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  books.splice(bookIndex, 1);
  res.json({ message: 'Book deleted successfully' });
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};