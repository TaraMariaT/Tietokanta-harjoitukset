const db = require('../models/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM arviointi', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.create = (req, res) => {
  const { idArviointi, Paivamaara, Arvosana, idOpiskelija, idOpintojakso } = req.body;

  db.query(
    'INSERT INTO arviointi (idArviointi, Paivamaara, Arvosana, idOpiskelija, idOpintojakso) VALUES (?, ?, ?, ?, ?)',
    [idArviointi, Paivamaara, Arvosana, idOpiskelija, idOpintojakso],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Evaluation added' });
    }
  );
};