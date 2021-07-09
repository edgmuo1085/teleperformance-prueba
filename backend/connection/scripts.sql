-- DASE DE DATOS
CREATE DATABASE security_teens;

-- TABLA usuarios
CREATE TABLE public.usuarios (
    id serial NOT NULL,
    nombres character varying,
    apellidos character varying,
    correo character varying,
    edad character varying,
    usuario character varying,
    contrasenia character varying,
    primary key (id)
);

-- USUARIO
	admin

-- CONTRASEÑA

	Admin123

-- ENCRIPTACIÓN SHA256
	3b612c75a7b5048a435fb6ec81e52ff92d6d795a8b5a9c17070f6a63c97a53b2


-- INSERCION DE DATOS
INSERT INTO usuarios (nombres, apellidos, correo, edad, usuario, contrasenia) 
VALUES('Administrador','Admin','adminadmin@gmail.com','22','admin','3b612c75a7b5048a435fb6ec81e52ff92d6d795a8b5a9c17070f6a63c97a53b2');

--UPDATE usuarios SET contrasenia='3b612c75a7b5048a435fb6ec81e52ff92d6d795a8b5a9c17070f6a63c97a53b2' WHERE id=1;