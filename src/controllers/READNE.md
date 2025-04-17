# Backend Book API

A simple Node.js and Express backend API for managing a list of books.

## Features

- Get all books
- Get a book by ID
- Add a new book
- Update a book
- Delete a book

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository or download the source code.
2. Install dependencies:

   bash
   npm install
   

### Running the Server

For development (with auto-restart):

bash
npm run dev


For production:

bash
npm start


The server will run on [http://localhost:5000](http://localhost:5000).

## API Endpoints

- GET /books- Get all books
- GET /books/:id- Get a book by ID
- POST /books- Add a new book
- PUT /books/:id - Update a book
- DELETE /books/:id- Delete a book

## Project Structure


src/
  app.js
  controllers/
    books.js
  routes/
    routes.js
  middleware/
    logger.js
package.json


## License

ISC