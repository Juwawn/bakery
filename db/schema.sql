DROP DATABASE IF EXISTS bakerydb;
CREATE DATABASE bakerydb;
USE bakerydb;

CREATE TABLE flavor (
    flavor_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    flavorImg MEDIUMTEXT,
    description MEDIUMTEXT,
    CONSTRAINT pk_flavor PRIMARY KEY (flavor_id)
);

CREATE TABLE size (
    size_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    size VARCHAR(20) NOT NULL,
    CONSTRAINT pk_size PRIMARY KEY (size_id)
);

CREATE TABLE cookie (
    cookie_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    flavor_id SMALLINT UNSIGNED NOT NULL,
    size_id TINYINT UNSIGNED NOT NULL,
    qty TINYINT UNSIGNED NOT NULL,
    price TINYINT UNSIGNED NOT NULL,
    description MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_cookie PRIMARY KEY (cookie_id),
    CONSTRAINT fk_flavor FOREIGN KEY (flavor_id) REFERENCES flavor (flavor_id),
    CONSTRAINT fk_size FOREIGN KEY (size_id) REFERENCES size (size_id)
);

CREATE TABLE brownie (
    brownie_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    flavor2_id SMALLINT UNSIGNED NOT NULL,
    size2_id TINYINT UNSIGNED NOT NULL,
    qty TINYINT UNSIGNED NOT NULL,
    price TINYINT UNSIGNED NOT NULL,
    description MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_brownie PRIMARY KEY (brownie_id),
    CONSTRAINT fk_flavor2 FOREIGN KEY (flavor2_id) REFERENCES flavor (flavor_id),
    CONSTRAINT fk_size2 FOREIGN KEY (size2_id) REFERENCES size (size_id)
);

CREATE TABLE cake (
    cake_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    flavor3_id SMALLINT UNSIGNED NOT NULL,
    size3_id TINYINT UNSIGNED NOT NULL,
    qty TINYINT UNSIGNED NOT NULL,
    price TINYINT UNSIGNED NOT NULL,
    description MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_cake PRIMARY KEY (cake_id),
    CONSTRAINT fk_flavor3 FOREIGN KEY (flavor3_id) REFERENCES flavor (flavor_id),
    CONSTRAINT fk_size3 FOREIGN KEY (size3_id) REFERENCES size (size_id)
);

CREATE TABLE cupcake (
    cupcake_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    flavor4_id SMALLINT UNSIGNED NOT NULL,
    size4_id TINYINT UNSIGNED NOT NULL,
    qty TINYINT UNSIGNED NOT NULL,
    price TINYINT UNSIGNED NOT NULL,
    description MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_cupcake PRIMARY KEY (cupcake_id),
    CONSTRAINT fk_flavor4 FOREIGN KEY (flavor4_id) REFERENCES flavor (flavor_id),
    CONSTRAINT fk_size4 FOREIGN KEY (size4_id) REFERENCES size (size_id)
);

CREATE TABLE specialty (
    specialty_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    flavor5_id SMALLINT UNSIGNED NOT NULL,
    size5_id TINYINT UNSIGNED NOT NULL,
    qty TINYINT UNSIGNED NOT NULL,
    price SMALLINT UNSIGNED NOT NULL,
    description MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_specialty PRIMARY KEY (specialty_id),
    CONSTRAINT fk_flavor5 FOREIGN KEY (flavor5_id) REFERENCES flavor (flavor_id),
    CONSTRAINT fk_size5 FOREIGN KEY (size5_id) REFERENCES size (size_id)
);

CREATE TABLE snackbox (
    snackbox_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    flavor6_id SMALLINT UNSIGNED NOT NULL,
    qty TINYINT UNSIGNED NOT NULL,
    price TINYINT UNSIGNED NOT NULL,
    snackImg MEDIUMTEXT,
    description MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_snackbox PRIMARY KEY (snackbox_id),
    CONSTRAINT fk_flavor6 FOREIGN KEY (flavor6_id) REFERENCES flavor (flavor_id)
);

CREATE TABLE user (
    user_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(50) NOT NULL,
    lName VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_user_id PRIMARY KEY (user_id)
);

-- change foreign key
ALTER TABLE snackbox
DROP FOREIGN KEY fk_cookie;

ALTER TABLE snackbox
ADD CONSTRAINT fk_cookie
FOREIGN KEY (cookie_id) REFERENCES cookie (flavor_id) ON DELETE CASCADE;
