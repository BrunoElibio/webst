window.onload = function(){

    document.getElementById("botao").onclick = function(){
        var ajax = new XMLHttpRequest();
        var r = document.getElementById("resposta");
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4){
                alert(ajax.responseText);
            }
        } 
    }
    ajax.open("POST", "arquivo.txt");
    ajax.send(null);
    return false;
}