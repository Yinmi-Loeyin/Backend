const express = require('express');
const booksRouter = require('./routes/routes'); // Corrected path
const logger = require('./middleware/logger');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(logger);
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Use the books router
app.use('/books', booksRouter);

// Test route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Handle shutdowns
process.on('SIGTERM', () => {
  server.close(() => console.log('Process terminated'));
});

process.on('SIGINT', () => {
  server.close(() => console.log('Process terminated'));
});

module.exports = app;
