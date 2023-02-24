-- to create a new database
CREATE DATABASE findinkdb;

-- to use database
use findinkdb;

-- creating a new table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  nickname VARCHAR(25) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  type INT(1) UNSIGNED NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe customer;