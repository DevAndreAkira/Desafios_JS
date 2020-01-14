function impar_par(numero) {
    if(numero%2==0){
        return "Par"
    }
    else if(numero%2==1){
        return "Ímpar"
    }
    else{
        return alert("Use um número!"), "Use um número!";
    }
}

document.getElementById('botao4').onclick = function(){
    var info_numero = document.getElementById('numeroin').value;

    var execucao = impar_par(info_numero);

    var calc = execucao;
    document.getElementById('numeroout').innerHTML = calc;

    return false
}