create database projeto;
use projeto;

create table stock (
id_adm int primary key,
number_toys int,
number_animals int,
number_clothes int,
number_shoes int
);

select * from stock;

create table users (
id_user INT auto_increment primary key,
user_name varchar (50),
email varchar (50),
user_password varchar (50),
number_phone varchar (50),
address varchar (50),
birth_date date,
registration_date datetime default current_timestamp,
status varchar (50)
);

select * from users;

create table donate (
id_donate int auto_increment primary key,
id_user int,
donate_date datetime,
value decimal (10,2),
description_donate text,
foreign key (id_user) references users (id_user)
);

select * from donate;
