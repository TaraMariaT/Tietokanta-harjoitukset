const express = require('express');
const router = express.Router();
const arviointiController = require('../controllers/arviointiController');

router.get('/', arviointiController.getAll);
router.post('/', arviointiController.create);

module.exports = router;