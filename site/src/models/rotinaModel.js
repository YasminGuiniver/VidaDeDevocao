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

function listarUsuariosComAMesmaRotina(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    var instrucaoSql = `SELECT u.nomeUsuario AS nome, r.nomeRotina AS rotina FROM tbRotina r
            JOIN tbRotinaDoUsuario ru ON r.idRotina = ru.fkRotina
            JOIN tbUsuario u ON ru.fkUsuario = u.idUsuario
            WHERE r.idRotina IN (
                SELECT fkRotina FROM tbRotinaDoUsuario WHERE fkUsuario = '${idUsuario}')
            AND u.idUsuario <> '${idUsuario}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    verificaRotina,
    cadastrarRotina,
    listarRotinaUsuario,
    listarUsuariosComAMesmaRotina
}