const db = require('../models/db');

// GET all books
exports.getAll = (req, res) => {
  db.query('SELECT * FROM book', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// GET book by id
exports.getOne = (req, res) => {
  db.query(
    'SELECT * FROM book WHERE id_book = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

// POST create book
exports.create = (req, res) => {
  const { name, author, isbn } = req.body;
  db.query(
    'INSERT INTO book (name, author, isbn) VALUES (?, ?, ?)',
    [name, author, isbn],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Book added', id: result.insertId });
    }
  );
};

// PUT update book
exports.update = (req, res) => {
  const { name, author, isbn } = req.body;
  db.query(
    'UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?',
    [name, author, isbn, req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Book updated' });
    }
  );
};

// DELETE book
exports.delete = (req, res) => {
  db.query(
    'DELETE FROM book WHERE id_book=?',
    [req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Book deleted' });
    }
  );
};