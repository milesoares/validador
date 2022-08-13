console.log("Javascript carregado");

function validaCPF(cpf) {
  //console.log(cpf.length);
  if(cpf.length != 11) {
    return false;
  } else {
    let numeros = cpf.substring(0, 9);
    let digitos = cpf.substring(9);

    let soma = 0;
    for(let i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
    console.log(soma);

    //operador tenário
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //validação do primeiro digito
    if(resultado != digitos.charAt(0)){
      return false;
    }
    
    soma = 0;
    numeros = cpf.substring(0, 10);

    for(let m = 11; m > 1; m--){
      soma += numeros.charAt(11 - m) * m;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //validação do segundo digito
    if(resultado != digitos.charAt(1)){
      return false;
    }
   
    return true;
  }
}

function validacao(){
  console.log("Iniciando validação do CPF");
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  const cpf = document.getElementById("cpf_digitado").value;
  console.log(cpf);

  const resultadoValidacao = validaCPF(cpf);

  if(resultadoValidacao) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}