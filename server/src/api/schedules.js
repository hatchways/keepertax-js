/**
 *
 * !!!!!!!!!!!!!  IMPORTANT  !!!!!!!!!!!!!!!!!
 *
 * Please do not modify this file
 *
 */

const express = require('express');
const {
  generateScheduleC1,
} = require('../generateScheduleC/generateScheduleC1');
const {
  generateScheduleC2,
} = require('../generateScheduleC/generateScheduleC2');

const router = express.Router();

/**
 * Call generateScheduleC1
 */
router.post('/generateScheduleC1', async (req, res, next) => {
  try {
    const { multipliers, transactions } = req.body;
    res.json(generateScheduleC1(multipliers, transactions));
  } catch (error) {
    next(error);
  }
});

/**
 * Call generateScheduleC2
 */
router.post('/generateScheduleC2', async (req, res, next) => {
  try {
    const { multipliers, transactions, jobs } = req.body;
    res.json(generateScheduleC2(multipliers, transactions, jobs));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
