id = sessionStorage.ID_USUARIO;

const modal = document.getElementById("myModal");
const conteudoInicio = document.getElementById('conteudo_inicial');
const formulario = document.getElementById('form-modal');
const parteFinal = document.getElementById('fim_modal');


fetch(`/areaUsuario/rotina/verificaRotina/${id}`, {
    method: "GET",
})
.then(function (resposta) {
    return resposta.json().then(valorBoo => {
        console.log(valorBoo[0].resultado);
        var existe = valorBoo[0].resultado;

        if (existe == 0) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    });
})
.catch(function (erro) {
    console.log(`#ERRO: ${erro}`);
});

function habilitarFormulario () {
    conteudoInicio.style.display = 'none';
    formulario.style.display = 'block'; 
}

function habilitarParteFinal () {
    conteudoInicio.style.display = 'none';
    formulario.style.display = 'none';
    parteFinal.style.display = 'block';

    fetch(`/areaUsuario/rotina/listarRotina/${id}`, {
        method: "GET",
    })
    .then(function (resposta) {
        return resposta.json().then(rotina => {
            console.log("aqui estou, sendo quem sou",rotina[0].idRotina);
    
            span_numero.innerHTML = rotina[0].idRotina;
    
            span_modal.innerHTML = `Quantidade de horas: ${rotina[0].qdtHoras}hrs <br>
            Quantidade de capitulos: ${rotina[0].qdtCapitulos}  <br>
            Tempo para oração: ${rotina[0].qtdTempoOracao}mins <br>
            Tempo para louvor: ${rotina[0].qtdTempoOracao}mins`
        });
    })
    .catch(function (erro) {
        console.log(`#ERRO: ${erro}`);
    });
}

function cadastroRotina () {
    const  valueSelect = Number(select_horario.value);
    let valorVar = 0;

    if(valueSelect == "#") {
        error.innerHTML = "Por favor selecione uma opção";
    } else if (valueSelect == 1) {
        valorVar = 1;
    } else if (valueSelect == 2) {
        valorVar = 2;
    } else {
        valorVar = 3;
    }

    if(valorVar > 0) {
        fetch(`/areaUsuario/rotina/cadastrarRotina`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: id, 
                idRotinaServer: valorVar
            })
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);
                if (resposta.ok) {
                    habilitarParteFinal();
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro de pontos!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    
        return false;
    }

}   

function fechar() {
    modal.style.display = "none"
}
