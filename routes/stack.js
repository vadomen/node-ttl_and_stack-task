const express = require('express');
const router = express.Router();

const stackController = require('../controllers/stack.js');

router.get('/get', stackController.getFromStack);
router.post('/add', stackController.addToStack);

module.exports = router;
