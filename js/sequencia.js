

var valores;

valores = '';
document.getElementById('botao6').onclick = function () {
    for (i = 0; i <= 100; i++) {
        if (i == 0) {
            valores = i;
        } else {
            valores = valores + " " + i;
        }

    }

    document.getElementById('sequenciaout').innerText = valores;




    return false;
}