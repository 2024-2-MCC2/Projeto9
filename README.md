# Projeto9

### Banco de Dados📊

**Introdução à Banco de Dados**

Escolhemos o SGBD (Sistema Gerenciador de Banco de Dados), MySQL pela sua interface simples e consideravelmente intuitiva, além de poder usar o MySQL Workbench para facilitar e administrar a visualização conforme os dados são adicionados. O MySQL suporta vários tipos de dados, o que o torna flexível para trabalhar. Temos uma ampla documentação do MySQL disponível para consultas e diversos fóruns ativos para nos ajudar a trabalhar cada vez melhor com essa ferramenta. O MySQL pode ser acessado em várias plataformas como, Windows e Linux, além de ser um código aberto, e ter sua disponibilidade gratuita.

**SQL** - PROJETO
No workbench, aplicamos a tabela de cadastro do usuário, a tabela de doações financeiras que o usuário poderia realizar, e adicionamos a tabela de estoque da Instituição.

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


### Cálculo II📊

A função de estoque foi modelada para calcular o ponto em que o estoque atinge seu valor máximo e, posteriormente, determinar quando ele será completamente esgotado. Esses cálculos são essenciais para a gestão eficiente de recursos, permitindo uma melhor tomada de decisão em relação à reposição de alimentos e planejamento de doações futuras.


### Desenvolvimento Web Full Stack 📊




### 📄 Documentação

- Os arquivos anexados`README.md` contém detalhes sobre os cálculos realizados, explicações passo a passo, e a modelagem do Banco de Dados, além do SQL.
- Os arquivos da resolução em `.docx` e `.pdf` está incluído no repositório e contém o desenvolvimento matemático completo, a modelagem do Banco de Dados, SQL e Cálculo II onde as derivadas utilizadas para encontrar os pontos críticos (máximo e mínimo), além de exemplos detalhados dos cálculos.

### 💡 Objetivo

O projeto foi desenvolvido para ajudar a **Associação PROTEGE** monitorar e otimizar o uso de seu estoque de alimentos, garantindo que as crianças sob sua responsabilidade não fiquem sem alimentação e, ao mesmo tempo, gerenciando de maneira eficiente os recursos disponíveis.



