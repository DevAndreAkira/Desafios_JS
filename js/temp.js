// MÉTODOS
// CELSIUS
function calculo_celsius_fahre(celsius) {
    var cel_fah = (celsius * 9 / 5) + 32;
    return cel_fah;
}

function calculo_celsius_kelvin(celsius) {
    var cel_kel = (celsius * 1 + 273.15);
    return cel_kel;
}

// FAHRE
function calculo_fahre_celsius(fahre) {
    var fah_cel = (fahre - 32) * 5 / 9;
    return fah_cel;
}

function calculo_fahre_kelvin(fahre) {
    var fah_kel = (fahre - 32) * 5 / 9 + 273.15;
    return fah_kel;
}

// KELVIN
function calculo_kelvin_celsius(kelvin) {
    var kel_cel = (kelvin - 273.15);
    return kel_cel;
}

function calculo_kelvin_fahre(kelvin) {
    var kel_fah = (kelvin - 273.15) * 9 / 5 + 32;
    return kel_fah;
}

// AO CLICAR DO BOTÃO
document.getElementById("botao2").onclick = function () {
    // CRIA A VARIAVEL DO LOCAL ONDE SE INSERE OS DADOS NO HTML
    var meu_celsius = document.getElementById('celsiusin').value;
    // "SE" OS DADOS FOREM EM BRANCO, DEFINIR COMO "INDEFINIDO"
    if (meu_celsius == "") {
        meu_celsius = undefined;
    }
    var meu_fahre = document.getElementById('fahrein').value;
    if (meu_fahre == "") {
        meu_fahre = undefined;
    }
    var meu_kelvin = document.getElementById('kelvinin').value;
    if (meu_kelvin == "") {
        meu_kelvin = undefined;
    }

    // CALCULANDO O RESULTADO COM BASE NOS MÉTODOS LÁ EM CIMA
    var calc_cel1 = calculo_celsius_fahre(meu_celsius).toFixed(2);
    var calc_cel2 = calculo_celsius_kelvin(meu_celsius).toFixed(2);

    var calc_fahre1 = calculo_fahre_celsius(meu_fahre).toFixed(2);
    var calc_fahre2 = calculo_fahre_kelvin(meu_fahre).toFixed(2);

    var calc_kelvin1 = calculo_kelvin_celsius(meu_kelvin).toFixed(2);
    var calc_kelvin2 = calculo_kelvin_fahre(meu_kelvin).toFixed(2);

    // SE O CAMPO TEM INFORMAÇÕES NELES, CALCULAR A SEQUENCIA
    if (meu_celsius != undefined) {
        var mostrar_1 = calc_cel1;
        document.getElementById('fahreout').innerHTML = mostrar_1;
        var mostrar_2 = calc_cel2;
        document.getElementById('kelvinout').innerHTML = mostrar_2;
        var mostrar_2_1 = meu_celsius;
        document.getElementById('celsiusout').innerHTML = mostrar_2_1;
    }

    else if (meu_fahre != undefined) {
        var mostrar_3 = calc_fahre1;
        document.getElementById('celsiusout').innerHTML = mostrar_3;
        var mostrar_4 = calc_fahre2;
        document.getElementById('kelvinout').innerHTML = mostrar_4;
        var mostrar_4_1 = meu_fahre;
        document.getElementById('fahreout').innerHTML = mostrar_4_1;
    }

    else if (meu_kelvin != undefined) {
        var mostrar_5 = calc_kelvin1;
        document.getElementById('celsiusout').innerHTML = mostrar_5;
        var mostrar_6 = calc_kelvin2;
        document.getElementById('fahreout').innerHTML = mostrar_6;
        var mostrar_6_1 = meu_kelvin;
        document.getElementById('kelvinout').innerHTML = mostrar_6_1;
    }

    return false;
}