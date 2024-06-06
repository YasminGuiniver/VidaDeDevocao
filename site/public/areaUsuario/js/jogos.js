
b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var imagemUser = sessionStorage.IMAGEM_USUARIO;

if (imagemUser) {
    document.getElementById('img_perfil').src = `imgsUsuarios/${imagemUser}`;
} else {
    document.getElementById('img_perfil').src = `imgsUsuarios/padraoUser.png`;
}

var special_words = ['ADÃO', 'MARIA', 'ARÃO', 'REBECA', 'CASAMENTO', 'SANSÃO', 'HERODES', 'BETEL', 'BENJAMIN', 'BEATITUDE'];

var questions_list = [
    'Nome do primeiro homem criado por Deus? - ',
    'Qual o nome da mãe de Jesus? - ',
    'Nome do porta voz de Moisés? - ',
    'Moça que foi escolhida para se casar com Isaque? - ',
    'Onde Jesus realizou o primeiro milagre? - ',
    'Nome do homem que tinha muita força?',
    'Rei que mandou matar Jesus quando Ele era neném? - ',
    'Local onde Jacó teve o sonho da escada que chegava aos céus? - ',
    'Filho caçula de Jacó? - ',
    'Nome do monte onde Jesus pregou o sermão da montanha? - '
];

var filledCell = [2, 22, 42, 62, 1, 3, 4, 5, 25, 45, 65, 25, 26, 27, 28, 29, 30,
    49, 69, 89, 109, 129, 149, 169, 189, 70, 71, 72, 73, 14, 34, 54, 74, 94, 114, 134,
    33, 35, 36, 37, 47, 67, 87, 107, 127, 147, 167, 16, 36, 56, 76, 96, 116, 136, 156, 176
];

var firstIndex = [2, 1, 5, 25, 29, 69, 14, 33, 27, 16];

var word = {

    word1: {
        letter: special_words[0].split(''), // Converte a palavra "Adão" em um array de caracteres ['A', 'd', 'ã', 'o'].
        position: [2, 22, 42, 62], // Define as posições das células onde cada letra da palavra "Adão" será inserida.
        write: function () { // Define a função para escrever a palavra na grade.
            for (i in word.word1.letter) { // Itera sobre cada letra da palavra "Adão".
                var findCell = document.querySelector(`#cell_${word.word1.position[i]}`); // Encontra a célula da posição correspondente no array `position`.
                findCell.innerHTML = word.word1.letter[i]; // Insere a letra na célula encontrada.
            }
            cell_2.innerHTML = '<span style="color: #39FF14; font-size:10px">1</span>A'; // Adiciona o número da pergunta e a letra "A" na célula de posição 2.
        }
    },    
    word2: {
        letter: special_words[1].split(''),
        position: [1, 2, 3, 4, 5],
        write: function () {
            for (i in word.word2.letter) {
                var findCell = document.querySelector(`#cell_${word.word2.position[i]}`);

                findCell.innerHTML = word.word2.letter[i];
                
            }
            cell_1.innerHTML = '<span style="color: red; font-size:10px">2</span>M';

        }
    },
    word3: {
        letter: special_words[2].split(''),
        position: [5, 25, 45, 65],
        write: function () {
            for (i in word.word3.letter) {
                var findCell = document.querySelector(`#cell_${word.word3.position[i]}`);

                findCell.innerHTML = word.word3.letter[i];
                
            }
            cell_5.innerHTML = '<span style="color: red; font-size:10px; text-tranform: uppercase">3</span>A';
        }
    },
    word4: {
        letter: special_words[3].split(''),
        position: [25, 26, 27, 28, 29, 30],
        write: function () {
            for (i in word.word4.letter) {
                var findCell = document.querySelector(`#cell_${word.word4.position[i]}`);

                findCell.innerHTML = word.word4.letter[i];
                
            }
            cell_25.innerHTML = '<span style="color: red; font-size:10px">4</span>R';
        }
    },
    word5: {
        letter: special_words[4].split(''),
        position: [29, 49, 69, 89, 109, 129, 149, 169, 189],
        write: function () {
            for (i in word.word5.letter) {
                var findCell = document.querySelector(`#cell_${word.word5.position[i]}`);

                findCell.innerHTML = word.word5.letter[i];
                
            }
            cell_27.innerHTML = '<span style="color: red; font-size:10px">5</span>B';
        }
    },
    word6: {
        letter: special_words[5].split(''),
        position: [69, 70, 71, 72, 73, 74],
        write: function () {
            for (i in word.word6.letter) {
                var findCell = document.querySelector(`#cell_${word.word6.position[i]}`);

                findCell.innerHTML = word.word6.letter[i];
                
            }
            cell_69.innerHTML = '<span style="color: red; font-size:10px">6</span>S';
        }
    },
    word7: {
        letter: special_words[6].split(''),
        position: [14, 34, 54, 74, 94, 114, 134],
        write: function () {
            for (i in word.word7.letter) {
                var findCell = document.querySelector(`#cell_${word.word7.position[i]}`);

                findCell.innerHTML = word.word7.letter[i];
                
            }
            cell_14.innerHTML = '<span style="color: red; font-size:10px">7</span>H';
        }
    },
    word8: {
        letter: special_words[7].split(''),
        position: [33, 34, 35, 36, 37],
        write: function () {
            for (i in word.word8.letter) {
                var findCell = document.querySelector(`#cell_${word.word8.position[i]}`);

                findCell.innerHTML = word.word8.letter[i];
                
            }
            cell_33.innerHTML = '<span style="color: red; font-size:10px">8</span>B';
        }
    },
    word9: {
        letter: special_words[8].split(''),
        position: [27, 47, 67, 87, 107, 127, 147, 167],
        write: function () {
            for (i in word.word9.letter) {
                var findCell = document.querySelector(`#cell_${word.word9.position[i]}`);

                findCell.innerHTML = word.word9.letter[i];
                
            }
            cell_27.innerHTML = '<span style="color: red; font-size:10px">9</span>B';
        }
    },
    word10: {
        letter: special_words[9].split(''),
        position: [16, 36, 56, 76, 96, 116, 136, 156, 176],
        write: function () {
            for (i in word.word10.letter) {
                var findCell = document.querySelector(`#cell_${word.word10.position[i]}`);

                findCell.innerHTML = word.word10.letter[i];
                ;
            }
            cell_16.innerHTML = '<span style="color: red; font-size:10px">10</span>B';
        }
    },
};

var widthTable = 20;
var heightTable = 10;

var cont_correctAnswer = 0;

function start() {
    cont_correctAnswer = 0; // Reseta o contador de respostas corretas para zero.
    bt_start.style.display = 'none'; // Oculta o botão de iniciar.
    bt_destroyGame.style.display = 'block'; // Exibe o botão para destruir o jogo.
    div_questions.style.display = 'block'; // Exibe a div de perguntas.
    div_information.innerHTML = ''; // Limpa o conteúdo da div de informações.
    renderGrid(); // Chama a função para renderizar a grade.
    gameSequence(); // Inicia a sequência de perguntas do jogo.
}

function destroyGrid() {
    bt_start.style.display = 'block'; // Exibe o botão de iniciar.
    bt_destroyGame.style.display = 'none'; // Oculta o botão para destruir o jogo.
    div_questions.style.display = 'none'; // Oculta a div de perguntas.
    document.querySelector('#div_canvasCruzada').innerHTML = ''; // Limpa o conteúdo da grade do jogo.
    desistir(); // Chama a função para exibir mensagem de desistencia.
}

const pontos = {
    quantidadePontos: [],
    adicionaPontos: function () {
        this.quantidadePontos.push('1');
    },
}

function gameSequence() {
    span_questionText.innerHTML = `<b>${cont_correctAnswer + 1}.</b> ${questions_list[cont_correctAnswer]}`; // Exibe a próxima pergunta na sequência.

        if(cont_correctAnswer == 11) {
            console.log("parei aqui");
        }

        if (cont_correctAnswer == 1) {
            word.word1.write(); // Escreve a palavra 1 na grade se a resposta correta é a primeira.
        }
        else if (cont_correctAnswer == 2) {
            word.word2.write();
        }
        else if (cont_correctAnswer == 3) {
            word.word3.write();
        }
        else if (cont_correctAnswer == 4) {
            word.word4.write();
        }
        else if (cont_correctAnswer == 5) {
            word.word5.write();
        }
        else if (cont_correctAnswer == 6) {
            word.word6.write();
        }
        else if (cont_correctAnswer == 7) {
            word.word7.write();
        }
        else if (cont_correctAnswer == 8) {
            word.word8.write();
        }
        else if (cont_correctAnswer == 9) {
            word.word9.write(); 
        }
        else if (cont_correctAnswer == 10) {
            word.word10.write();
    
            //Chama a função que cadastra a pontuação no banco e apresenta mensagem final
            setTimeout(function () {
                apresentarFim();
            }, 1000);
        }
}


function apresentarFim() {
    cadastrarPontos(); //chama a função que vai cadastrar os pontos no banco
    bt_start.style.display = 'block'; // Exibe o botão de iniciar.
    bt_destroyGame.style.display = 'none'; // Oculta o botão para destruir o jogo.
    div_questions.style.display = 'none'; // Oculta a div de perguntas.
    document.querySelector('#div_canvasCruzada').innerHTML = ''; // Limpa o conteúdo da grade do jogo.
    div_information.style.display = 'block'; // Exibe a div de informações.
    div_information.innerHTML = '<h1 style="text-align: center;">Parabéns!!</h1><br><br><p style="text-align: center;">Você finalizou o jogo 🥳</p><br><br>'; // Exibe a mensagem de conclusão do jogo.
}

function desistir () {
    pontos.quantidadePontos.length = 0;
    div_information.style.display = 'block'; // Exibe a div de informações.
    div_information.innerHTML = '<h1 style="text-align: center;">Aaaah!!</h1><br><br><p style="text-align: center;">Você desistiu do jogo 🥹</p><br><br>'; // Exibe a mensagem de desistencia.
}

function renderGrid() {
    var tableGame = '<table id="gridGame" cellspacing=0 cellpadding=0>'; // Inicia a tabela HTML com as configurações de célula.

    var cellContent_tableGame = '&nbsp'; // Define o conteúdo padrão da célula como um espaço.
    var cell = 0; // Inicializa o contador de células.
    for (var row = 1; row <= heightTable; row++) { // Itera sobre cada linha da tabela.
        tableGame += `<tr id="row_${row}">`; // Adiciona uma linha à tabela com um ID único.
        for (var column = 1; column <= widthTable; column++, cell++) { // Itera sobre cada coluna da tabela.
            tableGame += `<td class="deadCell" id="cell_${cell}">` + cellContent_tableGame + '</td>'; // Adiciona uma célula à linha com um ID e conteúdo padrão.
        }
        tableGame += '</tr>'; // Fecha a linha da tabela.
    }
    tableGame += '</table>'; // Fecha a tabela.

    document.querySelector('#div_canvasCruzada').innerHTML = tableGame; // Insere a tabela construída na div do canvas.
    paintCells(); // Chama a função para pintar as células.
}

function paintCells() {
    for (item in filledCell) { // Itera sobre os índices das células preenchidas.
        var paintCell = document.getElementById(`cell_${filledCell[item]}`); // Obtém a célula pelo ID.
        paintCell.removeAttribute('deadCell'); // Remove o atributo 'deadCell'.
        paintCell.setAttribute('class', 'availableCell'); // Define a célula como disponível.
    }
    for (var initial = 0; initial < firstIndex.length; initial++) { // Itera sobre os índices das primeiras letras.
        var paintIndex_cell = document.getElementById(`cell_${firstIndex[initial]}`); // Obtém a célula pelo ID.
        paintIndex_cell.innerHTML = `<span style="color: purple; font-size:10px">${initial + 1}</span>`; // Insere o número da pergunta na célula.
    }
}


function verify() {
    var input_answer = document.getElementById('input_answer');
    var answer = input_answer.value; // Obtém o valor da resposta do usuário.

    answer = answer.toUpperCase(); // Converte para maiúsculas

    if (answer != '') { // Verifica se a resposta não está vazia.
        if (answer == special_words[cont_correctAnswer]) { // Verifica se a resposta está correta.
            div_verifiedAnswer.classList.remove('wrongAnswer');
            div_verifiedAnswer.classList.add('correctAnswer'); // Adiciona a classe de resposta correta.
            div_verifiedAnswer.innerHTML = '<br>Resposta Correta!'; // Exibe a mensagem de resposta correta.
            cont_correctAnswer++; // Incrementa o contador de respostas corretas.
            pontos.adicionaPontos();
        } else { // Se a resposta estiver incorreta.
            div_verifiedAnswer.classList.add('wrongAnswer'); // Adiciona a classe de resposta incorreta.
            div_verifiedAnswer.innerHTML = '<br>Resposta Incorreta, tente novamente'; // Exibe a mensagem de resposta incorreta.
        }
        setTimeout(function () {
            div_verifiedAnswer.style.display = 'block'; // Exibe a div de verificação de resposta após 0,5 segundo.
        }, 500);

        setTimeout(function () {
            div_verifiedAnswer.style.display = 'none'; // Oculta a div de verificação de resposta após 3 segundos.
        }, 3000);

        input_answer.value = ''; // Limpa o campo de resposta.
        gameSequence(); // Chama a próxima sequência de perguntas.
    } else {
        let modal = document.getElementById('modalVazio');

        modal.style.display = "block";
        setTimeout(function () {
            modal.style.display = "none";
        }, 2000)
    }
}


function cadastrarPontos () {
    var id = Number(sessionStorage.ID_USUARIO);
    var pontosTotaisVar = pontos.quantidadePontos.length;

    fetch(`/areaUsuario/jogo/cadastroPontuacao`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: id, 
            pontosServer: pontosTotaisVar
        })
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                console.log("cadastrei")
            } else {
                throw "Houve um erro ao tentar realizar o cadastro de pontos!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}