function iftal() {
    var numero3 = document.getElementById('digitoin').value;

    var mensagem;

    if (numero3 % 3 === 0) {
        mensagem = "É múltiplo de 3!";
        document.getElementById('eitaout').innerHTML = mensagem;
    }
    else{
        mensagem = "Não é múltiplo de 3!";
        document.getElementById('eitaout').innerHTML = mensagem;
    }
}

document.getElementById('botao10').onclick = function () {
    iftal();

    return false;
}