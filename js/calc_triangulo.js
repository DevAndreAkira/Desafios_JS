var quantidade;
quantidade = '';


document.getElementById('botao8').onclick = function () {
    quantidade = "";
    var altura = document.getElementById('altura').value;

    for (i = altura; i > 0; i--) {
        quantidade = quantidade + "\n";
        for (j = i; j > 0; j--) {
            if (j == i) {
                if (quantidade == "\n") {
                    quantidade = ("*");
                }
                else {
                    quantidade = quantidade + "*";
                }
            }
            else {
                quantidade = quantidade + "*";
            }
        }
    }
    document.getElementById('triout').innerText = quantidade;



    return false;
}