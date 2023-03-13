DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca CHARSET=UTF8 COLLATE utf8_general_ci;
USE biblioteca;

CREATE TABLE livros(
    id int not null primary key auto_increment,
    titulo varchar(50) not null,
    autor varchar(50) not null,
    valor float(5,2) not null,
    data_emprestimo date not null,
    data_prevista date not null,
    data_devolucao date
);

INSERT INTO livros VALUES
(DEFAULT, "O poder do subconsciente","Joseph Murphy",34.80,"2023-02-01","2023-02-09","2023-02-07"),
(DEFAULT, "Arte da guerra","Sun Tzu",16.00,"2023-02-07","2023-02-15","2023-02-14"),
(DEFAULT, "O Mito da Caverna","Platão",18.89,"2023-02-15","2023-02-22","2023-02-27"),
(DEFAULT, "Os segredos da mente milionaria","T. Harv Eker",38.70,"2023-02-16","2023-02-20","2023-03-02"),
(DEFAULT, "O poder do subconsciente","Joseph Murphy",34.80,"2023-03-01","2023-03-09",DEFAULT);


