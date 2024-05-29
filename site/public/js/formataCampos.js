function formatarTelefone(numero) {
    // Remove todos os caracteres não numéricos
    numero = numero.replace(/\D/g, '');

    // Verifica se é um número de celular (9 dígitos) ou um número fixo (8 dígitos)
    const celular = numero.length === 11;

    // Formata o número de acordo com o formato brasileiro
    if (celular) {
        return numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        return numero.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
}

function formatarCampoTelefone(input) {
    input.addEventListener('input', function() {
        let start = input.selectionStart;
        let end = input.selectionEnd;

        // Formata o número de telefone
        input.value = formatarTelefone(input.value);

        // Mantém a posição do cursor
        let novaPosicao = start + (input.value.length - (end - start));
        input.setSelectionRange(novaPosicao, novaPosicao);
    });
}

let numeroTelefoneDigitado = document.getElementById('telefoneContatoInput');
formatarCampoTelefone(numeroTelefoneDigitado);