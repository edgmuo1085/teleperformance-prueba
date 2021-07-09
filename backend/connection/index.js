'use strict'

const { Client } = require('pg');
const params = require('./params.json');

class Connection {
    constructor() {
        return new Client(params);
    }
}

module.exports = Connection;