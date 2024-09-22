const express = require('express');
const router = express.Router();

const courseController = require('../app/controller/CourseController');

// newsController.index;

router.get('/:slug', courseController.show);

module.exports = router;
