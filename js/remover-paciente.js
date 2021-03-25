var tabela = document.querySelector("table");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
if(event.target.tagName == 'TD'){
    event.target.parentNode.remove()
}


    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){               //setTimeOut propriedade Js para dar uma pausa, passando a função que quer executar
    event.target.parentNode.remove();

    },500);
   

}); 