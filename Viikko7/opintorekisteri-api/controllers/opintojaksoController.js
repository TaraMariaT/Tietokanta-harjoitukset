const db = require('../models/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM opintojakso', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.create = (req, res) => {
  const { idOpintojakso, Koodi, Laajuus, Nimi } = req.body;

  db.query(
    'INSERT INTO opintojakso (idOpintojakso, Koodi, Laajuus, Nimi) VALUES (?, ?, ?, ?)',
    [idOpintojakso, Koodi, Laajuus, Nimi],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Course added' });
    }
  );
};