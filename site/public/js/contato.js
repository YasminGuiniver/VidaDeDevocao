function retirarFormatacao(numeroFormatado) {
    return numeroFormatado.replace(/\D/g, '');
}

function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nomeContatoInput.value;
    var emailVar = emailContatoInput.value;
    var telefoneVar = retirarFormatacao(telefoneInput.value);
    var mensagemVar = mensagemContatoText.value;

    let modal = document.getElementById("myModal");
    let btnFecharModal = document.getElementsByClassName("close")[0];
    let btnFecharModalDentro = document.getElementById('botaoFinal');
    
    if (
        nomeVar == "" ||
        emailVar == "" ||
        telefoneVar == "" ||
        mensagemVar == ""
    ) {
        p_contato_modal.innerHTML = "ERRO"
        span_modal_contato.innerHTML = "Preencha todos os campos para proseguir!"
        modal.style.display = "block";
        btnFecharModal.onclick = function () {
            modal.style.display = "none";
        }
        btnFecharModalDentro.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        return false;
    }

    fetch("/contato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar, 
            emailServer: emailVar,
            telefoneServer: telefoneVar,
            mensagemServer: mensagemVar
        })
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            modal.style.display = "block";
            btnFecharModal.onclick = function () {
                modal.style.display = "none";
            }
            btnFecharModalDentro.onclick = function () {
                modal.style.display = "none";

                nomeContatoInput.value = "";
                emailContatoInput.value = "";
                telefoneInput.value = "";
                mensagemContatoText.value = "";
            }
    
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";

                    nomeContatoInput.value = "";
                    emailContatoInput.value = "";
                    telefoneInput.value = "";
                    mensagemContatoText.value = "";
                }
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            p_contato_modal.innerHTML = "ERRO"
            span_modal_contato.innerHTML = "Parece que ouve um erro em nosso servidor, tente novamente"
            modal.style.display = "block";
            btnFecharModal.onclick = function () {
                modal.style.display = "none";
            }
            btnFecharModalDentro.onclick = function () {
                modal.style.display = "none";
            }
    
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            return false;
        });

    return false;
}