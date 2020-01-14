
function trocar1(valor1, valor2) {
    valor1 = (valor1 * 1 + valor2 * 1);
    valor2 = (valor1 * 1 - valor2 * 1);
    valor1 = (valor1 - valor2);

    return valor1;
}


function trocar2(valor1, valor2) {
    valor1 = (valor1 * 1 + valor2 * 1);
    valor2 = (valor1 * 1 - valor2 * 1);
    valor1 = (valor1 - valor2);

    return valor2;
}



document.getElementById('botao5').onclick = function () {

    var info_valor1 = document.getElementById('valorin1').value;
    var info_valor2 = document.getElementById('valorin2').value;


    var calculo_valores1 = trocar1(info_valor1, info_valor2);
    var calculo_valores2 = trocar2(info_valor1, info_valor2);

    var result1 = calculo_valores1;
    document.getElementById("valorout1").innerHTML = result1;

    var result2 = calculo_valores2;
    document.getElementById("valorout2").innerHTML = result2;

    return false;
}