var database = require("../database/config")

function verificaRotina(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    var instrucaoSql = `
    SELECT IFNULL(COUNT(*), 0) AS resultado
    FROM tbRotinaDoUsuario
    WHERE fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarRotina(fkUsuario, fkRotina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    var instrucaoSql = `
    INSERT INTO tbRotinaDoUsuario (fkUsuario, fkRotina, dataAtribuicaoRotina) VALUES ('${fkUsuario}', '${fkRotina}', now());`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function listarRotinaUsuario (fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    var instrucaoSql = `SELECT * FROM tbRotina AS rotina JOIN tbRotinaDoUsuario AS rotinaDoUsuario 
    ON rotinaDoUsuario.fkRotina = rotina.idRotina WHERE rotinaDoUsuario.fkUsuario = '${fkUsuario}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    verificaRotina,
    cadastrarRotina,
    listarRotinaUsuario
}