const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const serviceUser = require('../services');
const { promisify } = require('util');

// # VARIABLES
const readFile = promisify(fs.readFile);

// # CLASES
class TokenJWT {

    // create token
    async generateToken(user) {

        const keyPrivate = await readFile(path.join(__dirname, "../config/keyPriv.rsa"));
        const token = await jwt.sign({ user }, keyPrivate.toString(), { algorithm: 'RS256' });
        return await token.toString();
    }

    // validate token
    async ensureToken(req, res, next) {

        const bearerHeader = req.headers['authorization'];

        if (typeof bearerHeader !== 'undefined') {

            try {
                const keyPublic = await readFile(path.join(__dirname, "../config/keyPub.pub"));
                const validate = await jwt.verify(bearerHeader, keyPublic.toString(), { algorithm: 'RS256' });
                if (validate) {
                    next();
                }
            } catch (e) {
                res.status(500).json({ status: false, data: "Token Invalido" });
            }
        } else {
            res.status(500).json({ status: false, data: "No hay un Token" });
        }
    }

    // login
    async Login(req, res) {
        const result = await new serviceUser().login(req.body.username, req.body.password);
        
        if (result == null) {
            res.status(500).json({ status: false, data: "Credenciales no validas" });
        } else {
            const TokenPromise = await new TokenJWT().generateToken(result);
            res.json({ status: true, data: TokenPromise });
        }
    }

}

module.exports = TokenJWT;