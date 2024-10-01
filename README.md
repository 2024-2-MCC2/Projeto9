
# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Projeto Protege

## Grupo - 9

## Integrantes: <a href="https://www.linkedin.com/in/nicolly-silva-soares-10b627171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bc%2BtlfaxRQ3aiwqAvz3gOPA%3D%3D">Nicolly Soares</a>, <a href="https://www.linkedin.com/in/stephany-aliyah-4a2589321?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Blp3zpBvDRYmqlDT9zx2VWQ%3D%3D">Stephany Aliyah</a>, <a href="https://www.linkedin.com/in/hellen-silva-87611b1b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIdK6fZt5S5uRHZkgOKY8GQ%3D%3D">Hellen Silva</a>, Nicolas Soares</a>, Nicolas Soeiro</a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/victorbarq/">Dr. Victor Von Doom</a>, <a href="https://www.linkedin.com/in/victorbarq/">Me. Saitama</a>, <a href="https://www.linkedin.com/in/victorbarq/">Dr. Strange</a>, <a href="https://www.linkedin.com/in/victorbarq/">Me. Yoda</a>, <a href="https://www.linkedin.com/in/victorbarq/">Dr. Gero</a>

## Descrição

<p align="center">
<img src="https://pix4free.org/assets/library/2021-01-20/originals/game.jpg" alt="NOME DO JOGO" border="0">
  Game by <a href="http://www.nyphotographic.com/">Nick Youngson</a> <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a> <a href="http://pix4free.org/">Pix4free</a>
</p>


De um a dois parágrafos sobre o que é seu projeto e o que ele faz.
<br><br>
Meu projeto ajuda estudantes FECAP a configurarem seus githubs.
<br><br>
May the force be with you!
<br><br>

## 🛠 Estrutura de pastas

-Raiz<br>
|<br>
|-->documentos<br>
  &emsp;|-->antigos<br>
  &emsp;|Documentação.docx<br>
|-->executáveis<br>
  &emsp;|-->windows<br>
  &emsp;|-->android<br>
  &emsp;|-->HTML<br>
|-->imagens<br>
|-->src<br>
  &emsp;|-->Backend<br>
  &emsp;|-->Frontend<br>
|readme.md<br>

A pasta raiz contem dois arquivos que devem ser alterados:

<b>README.MD</b>: Arquivo que serve como guia e explicação geral sobre seu projeto. O mesmo que você está lendo agora.

Há também 4 pastas que seguem da seguinte forma:

<b>documentos</b>: Toda a documentação estará nesta pasta.

<b>executáveis</b>: Binários e executáveis do projeto devem estar nesta pasta.

<b>imagens</b>: Imagens do sistema

<b>src</b>: Pasta que contém o código fonte.

## 🛠 Instalação

<b>Android:</b>

Faça o Download do JOGO.apk no seu celular.
Execute o APK e siga as instruções de seu telefone.

```sh
Coloque código do prompt de comnando se for necessário
```

<b>Windows:</b>

Não há instalação! Apenas executável!
Encontre o JOGO.exe na pasta executáveis e execute-o como qualquer outro programa.

```sh
Coloque código do prompt de comnando se for necessário
```

<b>HTML:</b>

Não há instalação!
Encontre o index.html na pasta executáveis e execute-o como uma página WEB (através de algum browser).

## 💻 Configuração para Desenvolvimento

Descreva como instalar todas as dependências para desenvolvimento e como rodar um test-suite automatizado de algum tipo. Se necessário, faça isso para múltiplas plataformas.

Para abrir este projeto você necessita das seguintes ferramentas:

-<a href="https://godotengine.org/download">GODOT</a>

```sh
make install
npm test
Coloque código do prompt de comnando se for necessário
```

## 📋 Licença/License


## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. <https://github.com/iuricode/readme-template>
2. <https://github.com/gabrieldejesus/readme-model>
3. <https://creativecommons.org/share-your-work/>
4. <https://freesound.org/>
5. Músicas por: <a href="https://freesound.org/people/DaveJf/sounds/616544/"> DaveJf </a> e <a href="https://freesound.org/people/DRFX/sounds/338986/"> DRFX </a> ambas com Licença CC 0.
















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

O projeto foi desenvolvido para ajudar a **Associação PROTEGE** monitorar e otimizar o uso de seu estoque de alimentos, garantindo que as crianças sob sua responsabilidade não fiquem sem alimentação e, ao mesmo tempo, gerenciando de maneira eficiente os recursos disponíveis.



