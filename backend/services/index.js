const connection = require('../connection/');
const sha256 = require('sha256');

class User {

    async login(username, password) {

        let con = new connection();
        con.connect();

        const res = await con.query(
            'SELECT id, usuario, nombres, apellidos, correo, edad FROM usuarios WHERE usuario = $1 AND contrasenia = $2', [username, sha256(password)]
        );
        try {
            if (res.rows.length > 0) {
                await con.end();
                return res.rows[0];
            } else {
                await con.end();
                return null;
            }
        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = User;