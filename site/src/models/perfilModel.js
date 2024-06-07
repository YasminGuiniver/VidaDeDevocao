var database = require("../database/config")

function listarRotina() {
    var instrucaoSql = `SELECT CONCAT(r.nomeRotina, ': ', r.qtdHoras, ' horas - ', r.qtdCapitulos, ' capítulos - ', 
    r.qtdTempoOracao, ' tempo de oração - ', r.qtdTempoLouvor, ' tempo de louvor') AS descricao_rotina
    FROM tbRotina AS r;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listaPerfil(idUsuario) {
    var instrucaoSql = `
    SELECT u.nomeUsuario AS nome_usuario, u.emailUsuario, u.telefoneUsuario, u.senhaUsuario, u.imagemPerfil, r.nomeRotina AS nome_rotina
    FROM tbUsuario u
    JOIN tbRotinaDoUsuario ru ON u.idUsuario = ru.fkUsuario
    JOIN tbRotina r ON ru.fkRotina = r.idRotina WHERE u.idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarRotina,
    listaPerfil
}