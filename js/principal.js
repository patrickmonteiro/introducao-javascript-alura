var titulo = document.querySelector('.titulo');
titulo.textContent = "Patrick Monteiro";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// selecionando a coluna do IMC
var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000) {
  console.log("Peso é inválido");
  pesoEhValido = false;
  tdImc.textContent = "Peso Inválido";
}

if(altura<= 0 || altura >= 3.00) {
  cosole.log("Altura é inválida");
  alturaEhValida = false;
  tdImc.textContent = "Altura Inválida";
}

if( alturaEhValida && pesoEhValido) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}
