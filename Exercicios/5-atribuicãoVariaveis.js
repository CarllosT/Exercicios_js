console.log("trabalhando com atribuição de variaveis");


const idade = 25;
const nome = "Larissa";
const sobrenome = "Raposo";


    console.log(nome, sobrenome); //virgula para dar espaço ou posso concatenar com ""

    console.log(`Meu nome é ${nome} ${sobrenome} `); // ${} intrapola minha variavel dentro da string facilitando a concatenação.

    const nomeCompleto = nome + sobrenome; // subscrevendo a variavel.  Porém, declarar como const não me permite subscrever.

    console.log(nomeCompleto);