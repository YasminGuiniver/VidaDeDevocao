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

    var imagemUsuario = foto.files[0];

    let modal = document.getElementById("myModal");
    let btnFecharModal = document.getElementsByClassName("close")[0];
    let btnFecharModalDentro = document.getElementById('botaoFinal');
    
    if(imagemUsuario == undefined) {
        imagemUsuario = "padraoUser.png"
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

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            telefoneServer: telefoneVar,
            imagemServer: imagemUsuario
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                modalConteudo.innerHTML = `
                        <div class="conteudo_modal">
                            <p id="paragrafo_modal">Sucessos</p>
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