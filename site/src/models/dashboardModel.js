var database = require("../database/config")


function listarVersiculos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.")
    var instrucaoSql = `
    SELECT idVersiculo AS id, CONCAT(tbLivro.nomeLivro, ' ', tbVersiculo.numeroCapitulo, ':', tbVersiculo.numeroVersiculo) AS Referencia FROM tbVersiculo
    JOIN tbLivro ON tbVersiculo.fkLivro = tbLivro.idLivro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarQuantidadePontos(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.")
    var instrucaoSql = `
    SELECT IFNULL(SUM(pontosUsuario), 0) AS pontosTotais
    FROM tbPontuacao
    WHERE fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function momentoUsuarioCadastrado(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.")
    var instrucaoSql = `
    SELECT momentoCadastroUsuario AS momento FROM tbUsuario WHERE idUsuario = '${idUsuario}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarVersiculoCompleto(idVersiculo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.")
    var instrucaoSql = `
    SELECT idVersiculo AS id, CONCAT(tbLivro.nomeLivro, ' ', tbVersiculo.numeroCapitulo, ':', tbVersiculo.numeroVersiculo, ' - ', 
    tbVersiculo.textoVersiculo) 
    AS Referencia FROM tbVersiculo
    JOIN tbLivro ON tbVersiculo.fkLivro = tbLivro.idLivro
    WHERE tbVersiculo.idVersiculo = '${idVersiculo}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarVersiculos,
    listarQuantidadePontos,
    momentoUsuarioCadastrado,
    mostrarVersiculoCompleto
};