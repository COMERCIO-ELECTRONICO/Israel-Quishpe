/*CREATE DATABASE celulares_db;

USE celulares_db;

CREATE TABLE celulares (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE celulares;

USE celulares_db;

CREATE TABLE usuario (
    idusu INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(200),
    nombre VARCHAR(50),
    tipo_documento VARCHAR(50),
    num_documento INT(13),
    direccion VARCHAR(100),
    telefono INT(10),
    email VARCHAR(20),
    clave VARCHAR(20)
);

DESCRIBE usuario;*/ 