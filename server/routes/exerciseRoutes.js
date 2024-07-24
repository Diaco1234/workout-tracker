const express = require('express');
const router = express.Router();
const { getExerciseData, addExerciseData } = require('../controllers/exerciseController');

router.get('/:name', getExerciseData);
router.post('/:name', addExerciseData);

module.exports = router;
