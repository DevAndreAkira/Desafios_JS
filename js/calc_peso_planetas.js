var merc = 0.37;
var venu = 0.88;
var mart = 0.38;
var jupt = 2.64;
var satu = 1.15;
var urano = 1.17;

function peso_mercurio(peso) {
    var peso = document.getElementById('pesoin').value;
    var pesomerc = (peso / 10) * merc;

    return pesomerc;
}

function peso_venus(peso) {
    var peso = document.getElementById('pesoin').value;
    var pesovenus = (peso / 10) * venu;

    return pesovenus;
}

function peso_marte(peso) {
    var peso = document.getElementById('pesoin').value;
    var pesomart = (peso / 10) * mart;

    return pesomart;
}

function peso_jupiter(peso) {
    var peso = document.getElementById('pesoin').value;
    var pesojupt = (peso / 10) * jupt;

    return pesojupt;
}

function peso_saturno(peso) {
    var peso = document.getElementById('pesoin').value;
    var pesosatu = (peso / 10) * satu;

    return pesosatu;
}

function peso_urano(peso) {
    var peso = document.getElementById('pesoin').value;
    var pesourano = (peso / 10) * urano;

    return pesourano;
}

document.getElementById('botao9').onclick = function () {
    var peso1 = document.getElementById('pesoin').value;

    document.getElementById('pesoout').innerHTML = (peso1) +" kg";

    var calcmerc = peso_mercurio();
    document.getElementById('mercurioout').innerHTML = (calcmerc.toFixed(2)) + " kg";
    var calcvenus = peso_venus();
    document.getElementById('venusout').innerHTML = (calcvenus.toFixed(2)) + " kg";
    var calcmarte = peso_marte();
    document.getElementById('marteout').innerHTML = (calcmarte.toFixed(2)) + " kg";
    var calcjupiter = peso_jupiter();
    document.getElementById('jupiterout').innerHTML = (calcjupiter.toFixed(2)) + " kg";
    var calcsaturno = peso_saturno();
    document.getElementById('saturnoout').innerHTML = (calcsaturno.toFixed(2)) + " kg";
    var calcurano = peso_urano();
    document.getElementById('uranoout').innerHTML = (calcurano.toFixed(2)) + " kg";

    return false;
}