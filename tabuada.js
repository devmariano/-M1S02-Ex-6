
let multiplicar = document.getElementById('start')
const div = document.getElementById("tabuada")
multiplicar.onclick = function(){
    var multiplicador = document.getElementById('multiplicador').value
    multiplicador = parseInt(multiplicador)
    if(multiplicador>0 && multiplicador<=10){
    var text = ''
    for(var i=1; i<=10; i++){
        var resultado = i*multiplicador
        text = text+multiplicador+' * '+i+" = "+resultado+"<br>"
        //console.log(text)
    }
    div.innerHTML = "<BR>Resultado:<BR><BR>"+text;
}else{
    div.innerHTML = "ERRO: Insira um valor entre 1 e 10!!!";
}
}