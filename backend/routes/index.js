'use strict'

const express = require('express');
const jugadorCtrl = require('../controllers/Jugador');
const auth = require('../middleware/auth');
const api = express.Router();

api.post('/sesion', new auth().Login);
api.post('/registro-usuario', jugadorCtrl.postAddGamer);
/*
api.post('/', new auth().ensureToken, jugadorCtrl.nombreMetodo);
*/
api.get('*', jugadorCtrl.getIndex);

module.exports = api;