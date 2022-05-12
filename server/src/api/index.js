/**
 *
 * !!!!!!!!!!!!!  IMPORTANT  !!!!!!!!!!!!!!!!!
 *
 * Please do not modify this file
 *
 */

const express = require('express');

const schedules = require('./schedules');

const router = express.Router();

router.use('/', schedules);

module.exports = router;
