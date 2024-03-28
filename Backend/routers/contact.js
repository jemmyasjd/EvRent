const express = require('express');
const { showContact, createContact } = require('../controllers/contact');
const router = express.Router();


router.route('/').get(showContact).post(createContact);

module.exports = router;