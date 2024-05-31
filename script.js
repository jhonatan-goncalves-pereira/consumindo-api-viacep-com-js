// fazendo requisição JS
// use o HTTPS
var consultaCep = fetch("https://viacep.com.br/ws/01001000/json/");
// Retorno em Promise
// promessa de algo a acontecer, tornando algo assíncrono em algo síncrono 
// o uso do .then() duplo retorna promessas que então resultam em um retorno tangível
// consultaCep
// .then(resposta =>resposta.json())
// .then(dados => console.log(dados)).finally();

async function consultarCep(){
    var reqCep = await consultaCep;
    reqCepConvertida = await reqCep.json();
    console.log(reqCepConvertida);
}

consultarCep();


/*
----------------------------------------
VELHO JS SÍNCRONO
EXECUTADO SEQUNECIALMMENTE
console.log("Oi");

function mandaMesnsagem(){
    console.log("Oi, tudo bem?");
    console.log("Tudo sim")
}

mandaMesnsagem();

console.log("Ok ")
*/