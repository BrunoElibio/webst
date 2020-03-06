function validar(){
    var formulario = document.getElementById("formulario");
    var cpf= formulario.cpf;
    var email = formulario.email;

    var exp_email = /^([\w-]+(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;
    var exp_cpf = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;

    if(exp_cpf.test(cpf.value)){
        alert("cpf valido");
    }else{
        alert("Invalido");
    }


    if(exp_email.test(email.value)){
        alert("email valido");
    }else{
        alert("Invalido");
    }

}