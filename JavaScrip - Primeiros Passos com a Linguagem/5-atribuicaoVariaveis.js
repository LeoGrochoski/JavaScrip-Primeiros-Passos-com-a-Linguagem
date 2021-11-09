console.log("Trabalhando com atribuição de variáveis");

const primeiroNome = "Leonardo";
const sobrenome = "Nogueira";

// -> Boa pratica é uma vez a variavel seja declarada de um tipo ela permaneça com o tipo na qual foi declarada.

// Imprimindo variaveis
console.log(primeiroNome + sobrenome); // -> Variaveis sem espaço
console.log(primeiroNome, sobrenome); // -> Variaveis com espaço

// Concatenação de texto
console.log(primeiroNome + " " + sobrenome);

// Interpolação de texto
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variavel
idade = 26; // atribuição de valor;
idade = idade + 1;
console.log("Meu nome é", nomeCompleto, "e minha idade em 2022 será", idade, "anos");
