function retirarFormatacao(numeroFormatado) {
    return numeroFormatado.replace(/\D/g, '');
}

function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nomeInput.value;
    var emailVar = emailInput.value;
    var senhaVar = txtSenha.value;
    var telefoneVar = retirarFormatacao(telefoneInput.value);
    var confirmacaoSenhaVar = txtSenha_confirmation.value;
    var imagemVar = fotoInput.files[0];

    let modal = document.getElementById("myModal");
    let btnFecharModal = document.getElementsByClassName("close")[0];
    let btnFecharModalDentro = document.getElementById('botaoFinal');
    
    if(imagemVar == undefined) {
        imagemVar = "padraoUser.png"
    }

    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == "" ||
        telefoneVar == ""
    ) {
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

    if (senhaVar != confirmacaoSenhaVar) {
        span_modal.innerHTML = "As senhas não coincidem, por favor verifique e tente novamente"


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

    const formData = new FormData();
    formData.append('nome', nomeVar);
    formData.append('email', emailVar);
    formData.append('senha', senhaVar);
    formData.append('telefone', telefoneVar);
    formData.append('imagem', imagemVar);

    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formData
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                modalConteudo.innerHTML = `
                        <div class="conteudo_modal">
                            <p id="paragrafo_modal">Sucesso!</p>
                            <span id="span_modal">Cadastro realizado com sucesso, seja bem vindo! <br> 
                            Redirecionando para a tela de login em alguns segundos...</span>
                        </div>`;
                modal.style.display = "block";

                setTimeout(() => {
                    window.location = "login.html";
                }, " 5000");

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}