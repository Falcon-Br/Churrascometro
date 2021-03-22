//Carne - 400gr por pessoa, +6 horas - 650gr
//Cerveja  - 1200 ml por Pessoa, + 6 horas  - 2000ml
//Refrigerante/agua - 1000 ml por pessoa +6 horas 1500ml

//criança valem 0,5

//Pega "id" de cada uma dos inputs
const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    //pegas os valores dos inputs
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    //Verifica se tem número negativos ou vazios
    if(verificaNegativos(adultos, criancas, duracao)){
        return;
    }

    //Regra de negocio
    let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 *criancas);
    let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qdtTotalBebida = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao)/2 *criancas);
    console.log(qdtTotalCarne);

    //O "innerHTML" apaga o que tiver anteriomente, por isso usamos "+="    
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne</p>  `
        //Usa o "createElement" e o "appendChild" para colocar uma imagem no final da mensagem
        const div = document.getElementById("resultado");
        const image = document.createElement("img");
        image.src = "./imagens/meat.png";
        image.width = 30;
        div.appendChild(image);

    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>  `
        image.src = "./imagens/beer.png";
        div.appendChild(image);

    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida / 2000)} Pet's de "2L" de Bebia</p>  `
        image.src = "./imagens/soda.png";
        div.appendChild(image);
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function verificaNegativos(adultos, criancas, duracao){

    if(adultos < 0 || adultos == ""){
        resultado.innerHTML = "Valores negativos ou vazios não são permitidos, verifique o número de Adultos";
        console.log("Adultos Negativo");
        return true;
    }else if(criancas < 0 || criancas == ""){
        resultado.innerHTML = "Valores negativos ou vazios não são permitidos, verifique o número de Crianças";
        console.log("Criança Negativo");
        return true;
    }else if(duracao < 0 || duracao == ""){
        resultado.innerHTML = "Valores negativos ou vazios não são permitidos, verifique o número de Duração";
        console.log("Duração Negativo");
        return true;
    }
}