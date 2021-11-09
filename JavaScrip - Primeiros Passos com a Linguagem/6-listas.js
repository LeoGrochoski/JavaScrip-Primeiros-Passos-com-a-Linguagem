console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`; 

//--> ctrl + ? = deixar trecho do código selecionado comentado;
// + 
//--> ctrl + ? = voltar trecho comentado para código.

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//add um elemento da lista
listaDeDestinos.push(`Curitiba`); // -> Adicionando um item na lista "listaDeDestinos"

console.log("Destinos Possiveis:");
// console.log(salvador, salvador, rioDeJaneiro);

console.log(listaDeDestinos);

//excluir um elemento da lista
listaDeDestinos.splice(2,1); //-> Trabalhando com listas a primeira posição é zero, [0 = Salvador, 1 = São Paulo, 2 = Rio de Janeiro, 3 = Curitiba]
console.log(listaDeDestinos);

//exibir um elemento da lista
console.log(listaDeDestinos[1]);