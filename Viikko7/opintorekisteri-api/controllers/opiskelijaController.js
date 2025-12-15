const db = require('../models/db');

// GET all students
exports.getAll = (req, res) => {
  db.query('SELECT * FROM opiskelija', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// POST add student
exports.create = (req, res) => {
  const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = req.body;

  db.query(
    'INSERT INTO opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?, ?, ?, ?)',
    [Etunimi, Sukunimi, Osoite, Luokkatunnus],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Student added', id: result.insertId });
    }
  );
};

// PUT update student
exports.update = (req, res) => {
  const id = req.params.id;
  const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = req.body;

  db.query(
    'UPDATE opiskelija SET Etunimi=?, Sukunimi=?, Osoite=?, Luokkatunnus=? WHERE idOpiskelija=?',
    [Etunimi, Sukunimi, Osoite, Luokkatunnus, id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Student updated' });
    }
  );
};

// DELETE student
exports.delete = (req, res) => {
  db.query(
    'DELETE FROM opiskelija WHERE idOpiskelija=?',
    [req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Student deleted' });
    }
  );
};
