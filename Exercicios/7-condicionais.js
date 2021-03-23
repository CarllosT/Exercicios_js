console.log("Trabalhando com condicionais");

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

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagem = true;

console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade.");
//     listaDeDestinos.splice(1, 1)

// } else if (estaAcompanhada) //
// {
//     console.log("Comprador esta acompanhado.");
//     listaDeDestinos.splice(1, 1)

// } else {
//     console.log("Não é maior de idade, não posso vender!");
// }




    // console.log(idadeComprador > 18);
    // console.log(idadeComprador < 18);
    // console.log(idadeComprador <= 18);
    // console.log(idadeComprador >= 18);
    // console.log(idadeComprador == 18); //OPERADORES.


    if (idadeComprador >= 18 || estaAcompanhada == true)
            {
                console.log("Boa viagem.");
                listaDeDestinos.splice(2,1); //removendo itens

            } else
                {
                    console.log("Não é maior de idade, não posso realizar a venda.");
                }

                console.log("Embarque: \n \n"); // \n dentro de texto pula uma linha.

                    if(idadeComprador >= 18 && temPassagem)
                        {
                            console.log("Boa viagem!");
                        }else
                            {
                                console.log("Você não pode embarcar.");
                            }

                console.log(listaDeDestinos)

               