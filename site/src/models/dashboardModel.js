var database = require("../database/config")


function listarVersiculos() {
    var instrucaoSql = `
    SELECT idVersiculo AS id, CONCAT(tbLivro.nomeLivro, ' ', tbVersiculo.numeroCapitulo, ':', tbVersiculo.numeroVersiculo) AS Referencia FROM tbVersiculo
    JOIN tbLivro ON tbVersiculo.fkLivro = tbLivro.idLivro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarQuantidadePontos(idUsuario) {
    var instrucaoSql = `
    SELECT IFNULL(SUM(pontosUsuario), 0) AS pontosTotais
    FROM tbPontuacao
    WHERE fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function momentoUsuarioCadastrado(idUsuario) {
    var instrucaoSql = `
    SELECT momentoCadastroUsuario AS momento FROM tbUsuario WHERE idUsuario = '${idUsuario}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarVersiculoCompleto(idVersiculo) {
    var instrucaoSql = `
    SELECT idVersiculo AS id, CONCAT(tbLivro.nomeLivro, ' ', tbVersiculo.numeroCapitulo, ':', tbVersiculo.numeroVersiculo, ' - ', 
    tbVersiculo.textoVersiculo) 
    AS Referencia FROM tbVersiculo
    JOIN tbLivro ON tbVersiculo.fkLivro = tbLivro.idLivro
    WHERE tbVersiculo.idVersiculo = '${idVersiculo}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoPontuacao(idUsuario) {
    var instrucaoSql = `
   SELECT DISTINCT u.nomeUsuario AS nome, p.pontosUsuario AS pontuacao
    FROM tbUsuario u 
    JOIN tbRotinaDoUsuario ru ON u.idUsuario = ru.fkUsuario
    JOIN tbPontuacao p ON u.idUsuario = p.fkUsuario
    WHERE ru.fkRotina IN (
        SELECT fkRotina FROM tbRotinaDoUsuario WHERE fkUsuario = '5'
    );`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarVersiculos,
    listarQuantidadePontos,
    momentoUsuarioCadastrado,
    mostrarVersiculoCompleto,
    graficoPontuacao
};