const db = require('../models/db');

// GET all borrowers
exports.getAll = (req, res) => {
  db.query('SELECT * FROM borrower', (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
};

// GET borrower by id
exports.getOne = (req, res) => {
  const id = req.params.id;

  db.query(
    'SELECT * FROM borrower WHERE id_borrower = ?',
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json(result);
    }
  );
};

// POST create borrower
exports.create = (req, res) => {
  const { fname, lname, streetaddress } = req.body;

  db.query(
    'INSERT INTO borrower (fname, lname, streetaddress) VALUES (?, ?, ?)',
    [fname, lname, streetaddress],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({
        message: 'Borrower added',
        id: result.insertId
      });
    }
  );
};

// PUT update borrower
exports.update = (req, res) => {
  const id = req.params.id;
  const { fname, lname, streetaddress } = req.body;

  db.query(
    'UPDATE borrower SET fname=?, lname=?, streetaddress=? WHERE id_borrower=?',
    [fname, lname, streetaddress, id],
    err => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ message: 'Borrower updated' });
    }
  );
};

// DELETE borrower
exports.delete = (req, res) => {
  const id = req.params.id;

  db.query(
    'DELETE FROM borrower WHERE id_borrower=?',
    [id],
    err => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ message: 'Borrower deleted' });
    }
  );
};
