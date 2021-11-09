console.log(`\n Trabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 16;
const temPassagemComprada = false;
const estaAcompanhada = false;
const destino = "Salvador";

console.log(" \n Destinos Possiveis:");
console.log(listaDeDestinos);

console.log("");

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let destinoExiste = false;
let contador = 0;

//Aula While -->

// while (contador < 3) {
//     if (listaDeDestinos[contador] == destino) {
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }

// console.log("Destino existe: ", destinoExiste);

// if (podeComprar && destinoExiste) {
//     console.log("Boa viagem!!!");
// } else {
//     console.log("Desculpe, houve um erro");
// }


// const destino = ["São Paulo", "Rio de Janeiro"];
// let teste = 0
// .lenght faz a contagem de caracteres de elementos ou strings
// while (contador < destino.length) {
//     while (teste < listaDeDestinos.length) {
//         if (listaDeDestinos[teste] == destino[contador]) {
//             console.log(listaDeDestinos[teste], " Destino existe");
//             listaDeDestinos.push("Cuiába");
//             console.log(listaDeDestinos);
//             listaDeDestinos.splice(listaDeDestinos.indexOf("Belo Horizonte"), 1); --> indexOf - seleciona um elemento especifico do array, exemplo usado "Belo Horizonte"
//             listaDeDestinos.push("Fortaleza")
//             console.log(listaDeDestinos);
//         } else {
//             console.log(listaDeDestinos[teste], " Destino não existe");
//         }
//         teste = teste + 1
//     }
//     contador = contador + 1;
//     teste = 0
// }

console.log("Utilizando While");
while (contador < listaDeDestinos.length) {
    if (destino.includes(listaDeDestinos[contador])) {
        console.log(listaDeDestinos[contador], "O destino existe");
    } else {
        console.log(listaDeDestinos[contador], "O destino não existe");
    }
    contador += 1;
}

console.log("");

console.log("Utilizando For");
// Aula For -->
// abrindo for, criando a variavel para iniciar no 0 e ir até 2, adicionando 1 a cada loop.
// variavel++ é atalho para somar 1 a cada loop, é igual a, variavel = variavel + 1

for (let cont = 0; cont < 3; cont++) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        console.log(`${listaDeDestinos[cont]}:`, "O destino existe");
    }else{
        console.log(`${listaDeDestinos[cont]}:`, "O destino não existe");
    }
}

//Se tiver um nome que exemplifique melhor a variavel contador pode utilizar, é muito comum utilizar o i.
