const express = require('express');
const router = express.Router();
const borrowerController = require('../controllers/borrowerController');

// GET all borrowers
router.get('/', borrowerController.getAll);

// GET borrower by id
router.get('/:id', borrowerController.getOne);

// POST create borrower
router.post('/', borrowerController.create);

// PUT update borrower
router.put('/:id', borrowerController.update);

// DELETE borrower
router.delete('/:id', borrowerController.delete);

module.exports = router;
