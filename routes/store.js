const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store.js');

router.get('/get', storeController.getKeyValue);

router.post('/add', storeController.addKeyValue);

router.delete('/add', storeController.deleteKeyValue);

module.exports = router;
