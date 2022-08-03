const joi = require('joi');
const database = require('./database');
const fileMgmt = require('../shared/fileMgmt');

module.exports = {
    getLecturersList: async function (req, res, next) {
        const sql = "SELECT * FROM lecturers";

        try {
            const result = await database.query(sql);
            res.json(result[0]);
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    
}