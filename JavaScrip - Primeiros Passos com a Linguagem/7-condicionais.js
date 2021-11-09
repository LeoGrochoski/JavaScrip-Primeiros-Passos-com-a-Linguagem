console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

const idadeComprador = 19;
const maiorDeIdade = idadeComprador;
const temPassagemComprada = true;

// Estrutura de um if

// if (idadeComprador >= 18) {

// console.log("O comprador é maior de idade e efetuou a compra do destino", listaDeDestinos[1], "Segue lista abaixo com destinos ainda disponiveis:")
// listaDeDestinos.splice(1,1); //remove o item caso o comprador seja maior de idade
// console.log(listaDeDestinos)

// } else { 
//     console.log("Comprador não é maior de idade, não sendo permitido a venda, lista de destinos disponiveis para compra atualizada:")
//     //exibindo a list com elementos restantes na lista
//     console.log(listaDeDestinos);
// }

// Operadores logicos booleanos:

// console.log(minhaIdade > 18); //-> Se for maior;
// console.log(minhaIdade < 18); //-> se for menor;
// console.log(minhaIdade >= 18); //-> se for maior ou igual;
// console.log(minhaIdade <= 18); //-> se for menor ou igual;
// console.log(minhaIdade == 18); //-> se for igual.


// ifs encadeados

const estaAcompanhada = true;

// if(isdadeComprador >= 18) {
//     //comprador maior de idade
//     console.log("O comprador é maior de idade e realizou a compra do destino", listaDeDestinos[1], ".", "Segue lista abaixo com destinos ainda disponiveis:");
//     listaDeDestinos.splice(1, 1); // remove o item da lista caso o comprador seja maior de idade.
//     console.log(listaDeDestinos);
// } else if(estaAcompanhada == true) {
//     console.log("O comprador está acompanhado de um maior de idade e realizou a compra do destino", listaDeDestinos[1], ".", "Segue lista abaixo com destinos ainda disponiveis:");
//     listaDeDestinos.splice(1, 1); // remove o item da lista caso o comprador seja maior de idade.
//     console.log(listaDeDestinos);
// }else{
//     console.log("Comprador não é maior de idade, não sendo permitido a venda, lista de destinos disponiveis para compra atualizada:");
//     //exibindo a list com elementos restantes na lista
//     console.log(listaDeDestinos);
// }
// -> Alt + Shift + F = identa o código.

// || --> siginifa sinal de "ou

if(idadeComprador >= 18 || estaAcompanhada == false) {
    console.log("O comprador é maior de idade ou está acompanhado de um maior de idade e realizou a compra da passagem para:", listaDeDestinos[1], ".", "Segue lista abaixo com destinos ainda disponiveis: \n\n");
    listaDeDestinos.splice(1, 1); // remove o item da lista caso o comprador seja maior de idade.
    console.log(listaDeDestinos, "\n\n");
}else{
    console.log("Comprador não é maior de idade, não sendo permitido a venda da passagem, lista de destinos disponiveis para compra atualizada: \n\n");
    //exibindo a lista com elementos restantes na lista.
    
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);