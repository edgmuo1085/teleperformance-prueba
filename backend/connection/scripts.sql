-- DASE DE DATOS
CREATE DATABASE pruebas_tele;

-- TABLA usuarios
CREATE TABLE public.usuarios (
    id serial NOT NULL,
    nombres character varying,
    apellidos character varying,
    correo character varying,
    edad character varying,
    usuario character varying,
    contrasenia character varying,
    rol character varying,
    primary key (id)
);

-- USUARIO
	admin

-- CONTRASEÑA

	Admin123

-- ENCRIPTACIÓN SHA256
	3b612c75a7b5048a435fb6ec81e52ff92d6d795a8b5a9c17070f6a63c97a53b2


-- INSERCION DE DATOS
INSERT INTO usuarios (nombres, apellidos, correo, edad, usuario, contrasenia, rol) VALUES 
('Administrador','Admin','adminadmin@gmail.com','22','admin','3b612c75a7b5048a435fb6ec81e52ff92d6d795a8b5a9c17070f6a63c97a53b2','ROLE_ADMIN'),
('User','Normal','userprueba@gmail.com','20','cliente','3b612c75a7b5048a435fb6ec81e52ff92d6d795a8b5a9c17070f6a63c97a53b2','ROLE_USER');

--UPDATE usuarios SET contrasenia='3b612c75a7b5048a435fb6ec81e52ff92d6d795a8b5a9c17070f6a63c97a53b2' WHERE id=1;