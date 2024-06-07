b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
id = sessionStorage.ID_USUARIO;
nomeUserLogado = sessionStorage.NOME_USUARIO;

var imagemUser = sessionStorage.IMAGEM_USUARIO;

if (imagemUser) {
    document.getElementById('img_perfil').src = `imgsUsuarios/${imagemUser}`;
} else {
    document.getElementById('img_perfil').src = `imgsUsuarios/padraoUser.png`;
}

const momentoBanco = "";

fetch("/areaUsuario/dashboard/listarVersiculos", {
    method: "GET",
})
    .then(function (resposta) {
        resposta.json().then((versiculos) => {
            const showRandomVersiculo = () => {
                const randomIndex = Math.floor(Math.random() * versiculos.length);
                referencia_versiculo.innerHTML = versiculos[randomIndex].Referencia;
                listarVersiculoCompleto(versiculos[randomIndex].id)
            };

            showRandomVersiculo();
            const interval = setInterval(showRandomVersiculo, 10000);
        });
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });


function listarVersiculoCompleto(idVersiculo) {
    console.log("versiculo", idVersiculo);
    fetch(`/areaUsuario/dashboard/mostrarVersiculoCompleto/${idVersiculo}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((versiculo) => {
                texto_versiculo.innerHTML = versiculo[0].Referencia;
                console.log(versiculo[0].Referencia);
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

fetch(`/areaUsuario/dashboard/listarQuantidadePontos/${id}`, {
    method: "GET",
})
    .then(function (resposta) {
        resposta.json().then((pontos) => {
            quantidade_pontos.innerHTML = pontos[0].pontosTotais;
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

function calcularMinutosLogados(momentoBanco) {
    const agora = new Date();
    const diferencaMilissegundos = agora - momentoBanco;
    const diferencaMinutos = Math.floor(diferencaMilissegundos / (1000 * 60));

    return diferencaMinutos;
}

function pegarMomentoCadastroBanco() {
    fetch(`/areaUsuario/dashboard/momentoCadastro/${id}`, {
        method: "GET",
    })
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (data) {
            if (data.length > 0 && data[0].momento) {
                const momentoBanco = new Date(data[0].momento);

                function atualizarTempoLogado() {
                    const minutosLogados = calcularMinutosLogados(momentoBanco);
                    tempo_total.innerHTML = `${minutosLogados} mins`;
                }


                setInterval(atualizarTempoLogado, 60000);
                atualizarTempoLogado();
            } else {
                console.log("Dados inválidos recebidos");
            }
        })
        .catch(function (erro) {
            console.log(`#ERRO: ${erro}`);
        });
}

pegarMomentoCadastroBanco();

function abrirModalVersiculo() {
    var modalV = document.getElementById('modalVersiculo');
    modalV.style.display = 'block';
}

function fecharModal() {
    var modalV = document.getElementById('modalVersiculo');
    modalV.style.display = 'none';
}

fetch(`/areaUsuario/rotina/listarUsuarioMesmaRotina/${id}`, {
    method: "GET",
})
    .then(function (resposta) {
        resposta.json().then(function (resposta) {
            resposta.forEach(amigo => {
                body_table.innerHTML += `<tr> <td>${amigo.nome}</td> </tr>`
                console.log(amigo.nome);
            })
        })
    })
    .catch(function (erro) {
        console.log(`#ERRO: ${erro}`);
    });


function obterdados() {
    fetch(`/areaUsuario/dashboard/graficoDashboard/${id}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}



let proximaAtualizacao;
window.onload = obterDadosGrafico();

function obterDadosGrafico() {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/areaUsuario/dashboard/graficoDashboard/${id}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Nome',
            data: [],
            fill: false,
            borderColor: '#FFCC00',
            tension: 0.1,
            borderRadius: 10,
            backgroundColor: '#FFCC00',
            width: 10,
            borderWidth: 0,
        }]
    };
    let opcoes = {
        scales: {
            x: {
                ticks: {
                    color: '#FFCC00'
                }
            },
            y: {
                ticks: {
                    color: '#FFCC00'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#000000'
                }
            }
        }
        
    };
    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.nome);
        dados.datasets[0].data.push(registro.pontuacao);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados,
        option: opcoes
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`myChartCanvas`),
        config
    );
}