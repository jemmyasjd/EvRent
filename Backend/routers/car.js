const express = require('express');
const { createCars, getCars } = require('../controllers/car');
const router = express.Router();

router.route('/').get(getCars).post(createCars);

module.exports = router;
