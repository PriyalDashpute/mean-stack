var express = require('express');
var router = express.Router();
const userController = require('./task.controller')

router.get('/', taskController.gettask);

module.exports = router;