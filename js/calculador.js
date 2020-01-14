function calculador_distancia(tempo, velocidade) {
    distancia = tempo * velocidade;
    return distancia;
}

function calculador_litros(distancia) {
    litros = distancia * 12;
    return litros;
}

document.getElementById('botao3').onclick = function () {

    var infovel = document.getElementById('velin').value;
    var infotempo = document.getElementById('tempoin').value;

    var info_distancia = calculador_distancia(infovel, infotempo);
    var info_litros = calculador_litros(info_distancia);

    var mostrar_vel = infovel;
    document.getElementById('velout').innerHTML = mostrar_vel + " Km/h";
    var mostrar_tempo = infotempo;
    document.getElementById('tempoout').innerHTML = mostrar_tempo + " horas";
    var mostrar_distancia = info_distancia;
    document.getElementById('distanciaout').innerHTML = mostrar_distancia + " Km";
    var mostrar_litros = info_litros;
    document.getElementById('litrosout').innerHTML = mostrar_litros + " Litros";

    return false;
}

