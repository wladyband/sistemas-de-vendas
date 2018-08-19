'use strict'

var express = require('express');
var controller = require('../controllers/menu-constroller');
const router = express.Router();

   
router.get('/menu', controller.list_all_dataProviders); 


module.exports = router