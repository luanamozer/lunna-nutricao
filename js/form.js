
// botão para adicionar paciente 
//formulario

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    console.log(erros);


    if(erros.length > 0){
        exbibeMensagensDeErro(erros);

      return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exbibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";                          // Limpa msg de erro // modifica o html interno do elemento 

    erros.forEach(function(erro){              // recebe o item (erro)
    var li = document.createElement("li");    // cria a Li
    li.textContent = erro;                   // preenche com o valor de erro 
    ul.appendChild(li);                     // pega a Li e coloca dentro da Ul

    });

}
    
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}
function montaTr(paciente) {
    // cria Tr
     var pacienteTr = document.createElement("tr");
     pacienteTr.classList.add("paciente");

     // cria as Td's e adiciona dentro da Tr

     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
     pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
     pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

     // retorna a Tr
     return pacienteTr


}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
   

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if ( paciente.nome.length == 0 ){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
       erros.push("Peso é inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }

    if( paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if( paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if( paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}












