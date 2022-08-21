const express = require('express');
const router = express.Router();
const cm = require('../controllers/courses');
const fileMgmt = require('../shared/fileMgmt');


const lecturers = require('../controllers/courses');

router.get('/', cm.getCoursesList);
router.get ('/export', cm.exportCourses);
router.get ('/filter', cm.getFilteredCourses);
router.get ('/categories', cm.getCategories);


module.exports = router;