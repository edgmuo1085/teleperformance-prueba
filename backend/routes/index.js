'use strict'

const express = require('express');
const auth = require('../middleware/auth');
const api = express.Router();

api.post('/sesion', new auth().Login);

module.exports = api;