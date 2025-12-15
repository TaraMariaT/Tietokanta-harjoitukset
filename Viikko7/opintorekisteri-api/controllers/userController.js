const db = require('../models/db');
const bcrypt = require('bcryptjs');

// GET all users (näyttää kryptatun salasanan)
exports.getAll = (req, res) => {
  db.query('SELECT username, fname, password FROM user', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// POST create user (salasana kryptataan)
exports.create = async (req, res) => {
  const { username, fname, password } = req.body;

  try {
    // kryptataan salasana
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    db.query(
      'INSERT INTO user (username, fname, password) VALUES (?, ?, ?)',
      [username, fname, hashedPassword],
      (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'User created' });
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
