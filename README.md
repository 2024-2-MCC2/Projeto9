# Projeto9
Projeto 9

Introdução à Banco de Dados

Escolhemos o SGBD (Sistema Gerenciador de Banco de Dados), MySQL pela sua interface simples e consideravelmente intuitiva, além de poder usar o MySQL Workbench para facilitar e administrar a visualização conforme os dados são adicionados. O MySQL suporta vários tipos de dados, o que o torna flexível para trabalhar. Temos uma ampla documentação do MySQL disponível para consultas e diversos fóruns ativos para nos ajudar a trabalhar cada vez melhor com essa ferramenta. O MySQL pode ser acessado em várias plataformas como, Windows e Linux, além de ser um código aberto, e ter sua disponibilidade gratuita.

SQL - PROJETO

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
