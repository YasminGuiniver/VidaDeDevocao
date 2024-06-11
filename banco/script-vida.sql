CREATE DATABASE vidaDeDevocao;
USE vidaDeDevocao;

CREATE TABLE tbContato (
	idContato INT PRIMARY KEY AUTO_INCREMENT,
    nomeCliente VARCHAR(45),
    emailCliente VARCHAR(45),
    mensagemCliente VARCHAR(45),
    momentoContato DATETIME
);

CREATE TABLE tbLivro (
	idLivro INT PRIMARY KEY AUTO_INCREMENT,
    nomeLivro VARCHAR(45),
    testamentoLivro VARCHAR(45)
);

CREATE TABLE tbVersiculo (
	idVersiculo INT,
    fkLivro INT,
    numeroCapitulo INT,
    numeroVersiculo INT,
    textoVersiculo VARCHAR(500)
);

ALTER TABLE tbVersiculo ADD CONSTRAINT chavesPrimarias PRIMARY KEY (idVersiculo, fkLivro);
ALTER TABLE tbVersiculo MODIFY COLUMN idVersiculo INT AUTO_INCREMENT;
ALTER TABLE tbVersiculo ADD CONSTRAINT fkLivroVersiculo FOREIGN KEY (fkLivro) REFERENCES tbLivro(idLivro);

CREATE TABLE tbUsuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(45),
    emailUsuario VARCHAR(100),
    senhaUsuario VARCHAR(45),
    imagemPerfil VARCHAR(100),
    telefoneUsuario VARCHAR(15),
    momentoCadastroUsuario DATETIME,
    statusContatoUsuario CHAR(1)
);

CREATE TABLE tbRotina (
	idRotina INT PRIMARY KEY AUTO_INCREMENT,
    nomeRotina VARCHAR(45),
    qtdCapitulos INT,
    qtdHoras INT,
    qtdTempoOracao INT,
    qtdTempoLouvor INT
);


CREATE TABLE tbRotinaDoUsuario (
  idRotinaDoUusario INT,
  fkRotina INT,
  fkUsuario INT,
  dataAtribuicaoRotina DATETIME
);

ALTER TABLE tbRotinaDoUsuario ADD CONSTRAINT chavesPrimariasRotinaUsuario PRIMARY KEY (idRotinaDoUusario, fkRotina, fkUsuario);
ALTER TABLE tbRotinaDoUsuario MODIFY COLUMN idRotinaDoUusario INT AUTO_INCREMENT;
ALTER TABLE tbRotinaDoUsuario ADD CONSTRAINT  fkRotinaRotinaUsuario FOREIGN KEY (fkRotina) REFERENCES tbRotina(idRotina);
ALTER TABLE tbRotinaDoUsuario ADD CONSTRAINT fkUsuarioRotinaDoUser FOREIGN KEY (fkUsuario) REFERENCES tbUsuario(idUsuario);

CREATE TABLE tbPontuacao (
	idPontuacao INT,
    fkUsuario INT,
	pontosUsuario INT
);

ALTER TABLE tbPontuacao ADD CONSTRAINT chavesPrimariasPontuacao PRIMARY KEY(idPontuacao, fkUsuario);
ALTER TABLE tbPontuacao MODIFY COLUMN idPontuacao INT AUTO_INCREMENT;
ALTER TABLE tbPontuacao ADD CONSTRAINT fkUsuarioPontuacao FOREIGN KEY (fkUsuario) REFERENCES tbUsuario(idUsuario);

INSERT INTO tbLivro (nomeLivro, testamentoLivro) VALUES 
	('Gênesis', 'Antigo Testamento'),
	('Êxodo', 'Antigo Testamento'),
	('Salmos', 'Antigo Testamento'),
	('Provérbios', 'Antigo Testamento'),
	('Isaías', 'Antigo Testamento'),
	('Jeremias', 'Antigo Testamento'),
	('Mateus', 'Novo Testamento'),
	('João', 'Novo Testamento'),
	('Romanos', 'Novo Testamento'),
	('1 Coríntios', 'Novo Testamento'),
	('Efésios', 'Novo Testamento'),
	('Filipenses', 'Novo Testamento');

INSERT INTO tbVersiculo (fkLivro, numeroCapitulo, numeroVersiculo, textoVersiculo) VALUES
	(1, 1, 1, 'No princípio, Deus criou os céus e a terra.'),
	(1, 1, 26, 'Então disse Deus: "Façamos o homem à nossa imagem, conforme a nossa semelhança."'),
	(2, 3, 14, 'Respondeu Deus a Moisés: "Eu Sou o que Sou."'),
	(3, 23, 1, 'O Senhor é o meu pastor; nada me faltará.'),
	(3, 23, 4, 'Ainda que eu ande pelo vale da sombra da morte, não temerei mal nenhum, porque tu estás comigo.'),
	(4, 3, 5, 'Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.'),
	(5, 9, 6, 'Porque um menino nos nasceu, um filho nos foi dado, e o governo está sobre os seus ombros.'),
	(6, 29, 11, 'Porque eu sei os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.'),
	(7, 5, 16, 'Assim brilhe a luz de vocês diante dos homens, para que vejam as suas boas obras e glorifiquem ao Pai de vocês, que está nos céus.'),
	(8, 3,  16, 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.'),
	(9, 8, 28, 'Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.'),
	(10, 13, 13, 'Assim, permanecem agora estes três: a fé, a esperança e o amor. O maior deles, porém, é o amor.'),
	(11, 2, 8, 'Pois pela graça sois salvos, por meio da fé, e isto não vem de vós, é dom de Deus.'),
	(12, 4, 13, 'Posso todas as coisas naquele que me fortalece.');
    
INSERT INTO tbRotina (nomeRotina, qtdCapitulos, qtdHoras, qtdTempoOracao, qtdTempoLouvor)
VALUES 
    ('Caminho da Serenidade', '1', '1', '15', '10'), 
    ('Jornada de Luz', '2', '2', '30', '20'),
    ('Reflexões de Esperança', '3', '3', '60', '30');

-- SELECT SOMENTE DA REFERENCIA DO VERSICULO
SELECT idVersiculo AS id, CONCAT(tbLivro.nomeLivro, ' ', tbVersiculo.numeroCapitulo, ':', tbVersiculo.numeroVersiculo) AS Referencia FROM tbVersiculo
JOIN tbLivro ON tbVersiculo.fkLivro = tbLivro.idLivro;

-- SELECT DO VERSICULO TODO
SELECT idVersiculo AS id, CONCAT(tbLivro.nomeLivro, ' ', tbVersiculo.numeroCapitulo, ':', tbVersiculo.numeroVersiculo, ' - ', 
tbVersiculo.textoVersiculo) 
AS Referencia FROM tbVersiculo
JOIN tbLivro ON tbVersiculo.fkLivro = tbLivro.idLivro
WHERE tbVersiculo.idVersiculo = 1;

-- SELECT QUE PEGA O MOMENTO INTEIRO
SELECT momentoCadastroUsuario AS momento FROM tbUsuario WHERE idUsuario = 1;

-- SELECT PARA VERIFICAR SE O USUARIO TEM ALGUMA PONTUAÇÃO
SELECT IFNULL(SUM(pontosUsuario), 0) AS pontosTotais
FROM tbPontuacao
WHERE fkUsuario = 1;

-- SELECT PARA VERIFICAR SE O USUARIO JÁ SE LOGOU NO SISTEMA -- VERIFICA SE ELE TEM UMA ROTINA
SELECT IFNULL(COUNT(*), 0) AS resultado
FROM tbRotinaDoUsuario
WHERE fkUsuario = 1;

-- SELECT DA ROTINA DO USUARIO ESPECIFICO
SELECT * FROM tbRotina AS rotina JOIN tbRotinaDoUsuario AS rotinaDoUsuario 
ON rotinaDoUsuario.fkRotina = rotina.idRotina WHERE rotinaDoUsuario.fkUsuario = 1;

-- SELECT DE TODOS OS USERS QUE TEM A MESMA ROTINA
SELECT u.nomeUsuario AS nome, r.nomeRotina AS rotina FROM tbRotina r
JOIN tbRotinaDoUsuario ru ON r.idRotina = ru.fkRotina
JOIN tbUsuario u ON ru.fkUsuario = u.idUsuario
WHERE r.idRotina IN (
	SELECT fkRotina FROM tbRotinaDoUsuario WHERE fkUsuario = 3)
AND u.idUsuario <> 3;

-- SELECIONA DE FORMA DISTINTA O NOME E PONTUAÇÃO DE TODOS OS USUARIO QUE TEM A MESMA ROTINA -- GRAFICO
SELECT DISTINCT u.nomeUsuario AS nome, p.pontosUsuario AS pontuacao
    FROM tbUsuario u 
    JOIN tbRotinaDoUsuario ru ON u.idUsuario = ru.fkUsuario
    JOIN tbPontuacao p ON u.idUsuario = p.fkUsuario
    WHERE ru.fkRotina IN (
        SELECT fkRotina FROM tbRotinaDoUsuario WHERE fkUsuario = '5'
);

-- SELECIONA AS INFORMAÇÕES DO USUARIO -- PERFIL
SELECT u.nomeUsuario AS nome_usuario, u.emailUsuario, u.telefoneUsuario, u.senhaUsuario, u.imagemPerfil, r.nomeRotina AS nome_rotina
FROM tbUsuario u
JOIN tbRotinaDoUsuario ru ON u.idUsuario = ru.fkUsuario
JOIN tbRotina r ON ru.fkRotina = r.idRotina WHERE u.idUsuario = 1;

-- FORMATA E SELECIONA AS ROTINAS
SELECT CONCAT(r.nomeRotina, ': ', r.qtdHoras, ' horas - ', r.qtdCapitulos, ' capítulos - ', 
r.qtdTempoOracao, ' tempo de oração - ', r.qtdTempoLouvor, ' tempo de louvor') AS descricao_rotina
FROM tbRotina AS r;

UPDATE tbUsuario SET statusContatoUsuario = 1  WHERE idUsuario = 1; 
SELECT * FROM tbUsuario;