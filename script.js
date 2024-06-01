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
    var mensagemErro = document.querySelector("#erro");
    mensagemErro.innerHTML = "";
    try{
        var reqCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        reqCepConvertida = await reqCep.json();
        if(reqCepConvertida.erro){
            throw Error ("CEP Não encontrado");
        }
        document.querySelector("#bairro").value = reqCepConvertida.bairro;
        document.querySelector("#cidade").value = reqCepConvertida.localidade;
        document.querySelector("#endereco").value = reqCepConvertida.logradouro;      
        document.querySelector("#estado").value = reqCepConvertida.uf; 
    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP INVÁLIDO</p>`
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