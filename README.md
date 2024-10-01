
# FECAP - Fundação de Comércio Álvares Penteado

<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Protege
# Grupo - 9

## Integrantes: <a href="https://www.linkedin.com/in/hellen-silva-87611b1b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIdK6fZt5S5uRHZkgOKY8GQ%3D%3D">Hellen Caroline Batista silva Silva</a>,  <a href="https://github.com/2024-2-MCC2/Projeto9">Nicolas Roberto Jordan Morales</a>, <a href="https://github.com/2024-2-MCC2/Projeto9">Nicolas Soeiro</a>, <a href="https://www.linkedin.com/in/nicolly-silva-soares-10b627171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bc%2BtlfaxRQ3aiwqAvz3gOPA%3D%3D">Nicolly da Silva Soares</a>, <a href="https://www.linkedin.com/in/stephany-aliyah-4a2589321?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Blp3zpBvDRYmqlDT9zx2VWQ%3D%3D">Stephany Aliyah Guimarães Euripedes De Paula</a>


## Professores Orientadores: <a href="linkedin.com/in/dolemes"> David de Oliveira Lemes</a>, <a href="https://github.com/2024-2-MCC2/Projeto9">Victor Rosseti Quiroz</a>, <a href="https://github.com/2024-2-MCC2/Projeto9"> Renata Muniz do Nascimento</a>, <a href="https://github.com/2024-2-MCC2/Projeto9">Katia Milani Lara Bossi</a>, <a href="https://github.com/2024-2-MCC2/Projeto9">Francisco De Souza Escobaro</a>

<p align="center">
<img src="[![Screenshot_20241001-174121](https://github.com/user-attachments/assets/1237d0dc-556b-4982-9a34-c275ed33f7ea)](https://github.com/2024-2-MCC2/Projeto9/blob/main/Untitled%20design.png?raw=true)" alt="Projeto protege - Logo da instituição Protege" border="0"></a>
</p>


## Descrição
#Projeto protege

<p align="center">
<img src="[![Screenshot_20241001-174121](https://github.com/user-attachments/assets/1237d0dc-556b-4982-9a34-c275ed33f7ea)](https://github.com/2024-2-MCC2/Projeto9/blob/main/Untitled%20design.png?raw=true)" alt="Projeto protege - Logo da instituição Protege" border="0"></a>
</p>





Projeto Protege - site realizado pelo Grupo 9

Nosso projeto é um site de divulgação de uma Instituição localizada na Bolívia, essa Instituição acolhe crianças e jovens de 0 a 18 anos que moram nas ruas, fornecendo melhores condições de viver, e para ajudar essa Instituição, precisamos divulga-la. 
Em nosso site é possível realizar doações financeiras, entrar em contato com a Instituição para levar doações como roupas, sapatos, brinquedos e aparelhos eletrônicos, e disponibilizar do próprio tempo para ajudar essas crianças e jovens, sendo voluntário. A longo prazo essa Instituição vai conseguir viver de forma autossustentável, cuidando de animais como galinhas e vacas, para consumo próprio de suas produções como leite e ovos e comercializando para gerar renda. 

Nosso projeto ajuda jovens e crianças a ter um futuro melhor, com condições de viver com dignidade.




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
- Os arquivos da resolução em `.docx` e `.pdf` estão inclusos no repositório e contém o desenvolvimento matemático completo, a modelagem do Banco de Dados, SQL e Cálculo II onde as derivadas utilizadas para encontrar os pontos críticos (máximo e mínimo), além de exemplos detalhados dos cálculos.

### 💡 Objetivo

O projeto foi desenvolvido para ajudar a **Associação PROTEGE** a melhorar a gestão e o acompanhamento das atividades que realizam em prol das crianças e adolescentes em situação de vulnerabilidade. O principal objetivo é proporcionar à organização uma plataforma digital que facilite a **gestão de informações**.

Com o site, a **Associação PROTEGE** poderá gerenciar melhor suas ações diárias, como as oficinas educacionais e recreativas, as atividades produtivas (como a criação de coelhos da raça Cui e as plantações), e o acompanhamento do desenvolvimento das crianças. Além disso, o sistema permitirá um **controle mais organizado** das doações recebidas e dos projetos em andamento.

Essa ferramenta digital será essencial para otimizar o tempo da equipe e garantir que todas as ações da associação estejam alinhadas com seus valores de **amor, proteção e cuidado**, proporcionando um futuro mais seguro e digno para as crianças e adolescentes.
