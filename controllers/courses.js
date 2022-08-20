const joi = require('joi');
const database = require('./database');
const fileMgmt = require('../shared/fileMgmt');



module.exports = {
    getCoursesList: async function (req, res, next) {
        const sql = "SELECT code, courses.name as 'name', courses.description, courses.price, courses.start_date, lecturer_id, courses.num_of_classes, categories.name 'category', lecturers.first_name , lecturers.last_name FROM `courses` LEFT JOIN categories ON categories.id =courses.category_id LEFT JOIN lecturers ON courses.lecturer_id = lecturers.id";


        try {
            const result = await database.query(sql);
            res.json(result[0]);
            console.log("result" , result[0]);
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },
    exportCourses: function (req, res, next) {
        const sql = "SELECT code, courses.name as 'name', courses.description, courses.price, courses.start_date, lecturer_id, courses.num_of_classes, categories.name 'category', lecturers.first_name , lecturers.last_name FROM `courses` LEFT JOIN categories ON categories.id =courses.category_id LEFT JOIN lecturers ON courses.lecturer_id = lecturers.id";

        fileMgmt.exportToFile(res, sql, 'courses');
    },

    
}