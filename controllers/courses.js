const joi = require('joi');
const database = require('./database');
const fileMgmt = require('../shared/fileMgmt');

module.exports = {
     getCoursesList: async function (req, res, next) {
  
      const param = req.query;

      const schema = joi.object({
        column: joi.string().valid('name', 'price').default('name'),
        sort: joi.string().valid('ASC', 'DESC').default('ASC'),
      });

      const { error, value } = schema.validate(param);
      if (error) {
        console.log(error);
        res.status(400).send('add failed');
        return
      }

      const fieldsMap = new Map([
        ['name', 'courses.name'],
        ['price', 'courses.price'],
      ]);

      const query = "SELECT code, courses.name as 'name', courses.description, courses.price, courses.start_date, lecturer_id, courses.num_of_classes, categories.name 'category', lecturers.first_name , lecturers.last_name FROM `courses` LEFT JOIN categories ON categories.id =courses.category_id LEFT JOIN lecturers ON courses.lecturer_id = lecturers.id" + ` ORDER BY ${fieldsMap.get(value.column)} ${value.sort}`
        
      try {
        const result =  await database.query(query);
        res.json(result[0]);  
      }
      catch (err) {
        console.log(err);
        res.json(err);
      }
  },

    

    exportCourses: function (req, res, next) {
        const sql = "SELECT code, courses.name as 'name', courses.description, courses.price, courses.start_date, lecturer_id, courses.num_of_classes, categories.name 'category', lecturers.first_name , lecturers.last_name FROM `courses` LEFT JOIN categories ON categories.id =courses.category_id LEFT JOIN lecturers ON courses.lecturer_id = lecturers.id";

        fileMgmt.exportToFile(res, sql, 'courses');
    },

    getFilteredCourses: async function (req, res, next) {
    const param = req.query;
    const schema = joi.object({
      column: joi.string().min(2).required(),
      filter: joi.alternatives().try(joi.string(), joi.number()).required(),
    });

    const { error, value } = schema.validate(param);
    if (error) {
      console.log(error);
      res.status(400).send('add failed');
      return
    }

    const fieldsMap = new Map([
      ['category', 'categories.id'],
      ['lecturer_id', 'courses.lecturer_id'],
      ['code', 'courses.code'],
    ]);

      const query = "SELECT code, courses.name as 'name', courses.description, courses.price, courses.start_date, lecturer_id, courses.num_of_classes, categories.name 'category', lecturers.first_name , lecturers.last_name FROM `courses` LEFT JOIN categories ON categories.id =courses.category_id LEFT JOIN lecturers ON courses.lecturer_id = lecturers.id" + 
        ` WHERE ${fieldsMap.get(value.column)}=${value.filter}`

        try {
          const result =  await database.query(query);
          res.json(result[0]);
    
        }
        catch (err) {
          console.log(err);
          res.json(err);
        }
 
  },

  getCategories : async function (req, res, next) {
    const query = "SELECT * FROM categories;"

     try {
          const result =  await database.query(query);
          res.json(result[0]);
    
        }
        catch (err) {
          console.log(err);
          res.json(err);
        }
  }
   

    
}