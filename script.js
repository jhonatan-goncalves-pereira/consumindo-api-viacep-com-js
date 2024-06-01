// fazendo requisição JS
// use o HTTPS
//var consultaCep = fetch("https://viacep.com.br/ws/01001000/json/");
// Retorno em Promise
// promessa de algo a acontecer, tornando algo assíncrono em algo síncrono 
// o uso do .then() duplo retorna promessas que então resultam em um retorno tangível
// consultaCep
// .then(resposta =>resposta.json())
// .then(dados => console.log(dados)).finally();

async function consultarCep(cep){
    try{
        var reqCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        reqCepConvertida = await reqCep.json();
        if(reqCepConvertida.erro){
            throw Error ("CEP Não encontrado");
        }
        console.log(reqCepConvertida);
        return reqCepConvertida;
    }catch(erro){
        console.log(erro);
    }
}

var cep = document.querySelector("#cep");

cep.addEventListener("focusout", () =>{
    consultarCep(cep.value);
});


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