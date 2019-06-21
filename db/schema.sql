DROP DATABASE IF EXISTS calendar_db;
CREATE DATABASE calendar_db;
USE calendar_db

CREATE TABLE schedule
(
    id int
        NOT NULL
    AUTO_INCREMENT,
dates varchar
    (255),
appointment varchar
    (255) ,
tim varchar
    (255) , 
PRIMARY KEY
    (id)
);

    