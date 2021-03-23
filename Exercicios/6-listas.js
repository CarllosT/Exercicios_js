console.log("Trabalhando com listas");

const listaDeDestinos = new Array 
(
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`,
    `Curitiba`,
    `Bahia`,
    `Caxias`,
    `Tazmania`,
    `CasadoCaralho`,
);


    listaDeDestinos.push(`Cabo Frio`); //Adiciona um elemento dentro do array depois de pronto. Push.
    
    console.log("Destinos Possíveis: ");
    
    console.log(listaDeDestinos);

   listaDeDestinos.splice(1,1); // splice remove um elemento da lista de array.
   console.log(listaDeDestinos);
   console.log(listaDeDestinos[1]); // Nesse caso, seleciono apenas o elemento que quero imprimir na tela.