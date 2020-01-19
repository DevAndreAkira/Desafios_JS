document.getElementById('botao7').onclick = function(){
    for (i = 0; i < 10; i++) {
        if (i%2==0) {
            
        }
        else if (i==1){
            valores = i;
        }
        else{
            valores = valores + " " + i;
        }
    }
    document.getElementById('out').innerText = valores;
    
    return false;
}