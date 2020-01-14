// Criei as funções que irei precisar para fazer o calculo
function calculo_perimetro(base, altura) {
    var perimetro = base * 2 + altura * 2;
    return perimetro
}
function calculo_area(base, altura) {
    var area = base * altura;
    return area
}
function calculo_diagonal(base, altura) {
    var diagonal = base * base + altura * altura;
    return diagonal;
}

// ##################################################################################
// COMEÇA O CALCULO DO USUARIO
// ##################################################################################

// Ao clicar do botão 
document.getElementById('botao').onclick = function () {
    // Pega as informações do basein e alturain
    var minha_base2 = document.getElementById("basein").value;
    var minha_altura2 = document.getElementById('alturain').value;

    // Usa os métodos que já existem para calcular
    var outro_calculo1 = calculo_perimetro(minha_base2, minha_altura2);
    var outro_calculo2 = calculo_area(minha_base2, minha_altura2);
    var outro_calculo3 = calculo_diagonal(minha_base2, minha_altura2);

    // Mostra o resultado no local proposto
    var mostrar_outro1 = outro_calculo1;
    document.getElementById('perimetro2').innerHTML = mostrar_outro1;

    var mostrar_outro2 = outro_calculo2;
    document.getElementById('area2').innerHTML = mostrar_outro2;

    var mostrar_outro3 = outro_calculo3;
    document.getElementById('diagonal2').innerHTML = mostrar_outro3;

    return false;
}