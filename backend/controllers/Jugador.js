'use strict'

const connection = require('../connection');
const sha256 = require('sha256');

const getIndex = (req, res) => {
    res.status(200).send({ message: 'API Node.js' });
};

const postAddGamer = (req, res) => {

    const client = new connection()
    client.connect();
    client.query({
            text: 'INSERT INTO public.usuarios (nombres, apellidos, correo, edad, usuario, contrasenia) VALUES ($1,$2,$3,$4,$5,$6)',
            values: [
                req.body.nombres,
                req.body.apellidos,
                req.body.email,
                req.body.edad,
                req.body.usuario,
                sha256(req.body.password)
            ]
        })
        .then(r => {
            res.json({ status: true, data: "Jugador creado correctamente" })
            res.end()
            client.end();
        })
        .catch(err => {
            console.log(err);
            res.json({ status: false, data: err })
            res.end()
            client.end();
        });
};

module.exports = {
    postAddGamer,
    getIndex
};