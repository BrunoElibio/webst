

window.onload= function(){
    carregarPoltronas();
}



function carregarPoltronas(){
    var imagens=document.getElementsByTagName("img");
    for(var i in imagens){
        if(imagens[i].name=="oc"){
            imagens[i].src= "ocupado.png";
        }else{
            imagens[i].src="disponivel.png";
        }
    }
}

function select(){
    var imagem=document.getElementsByName("disp");
    imagem[0].name="sel";
    imagem[0].src="selecionada.png";

}

function selecionarPoltrona(){
    var imagens=document.getElementsByTagName("img");
    for(var i in imagens){
        if(imagens[i].name=="disp"){
            imagens[i].src="ocupado.png";
            imagens[i].name="oc";
            break;
        }
    }
}