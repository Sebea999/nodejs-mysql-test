const express = require('express');
const router = express.Router();

//router.get('/', (req, res) => { res.send('hello world the nodeJS'); });
// simplifique el codigo de arriba por el controller 
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);

module.exports = router;