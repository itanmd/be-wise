const jwt = require('jsonwebtoken');
const config = require('../config/dev');
const joi = require('joi');
const database = require('./database');
const bcrypt = require('bcrypt');