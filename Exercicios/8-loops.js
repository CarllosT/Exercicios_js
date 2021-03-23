console.log("\n Trabalhando com condicionais");

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
const estaAcompanhada = false;
let  temPassagem = false;
const destino = "Salvador";

console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
        
let contador = 0;
let destinoExiste = false;
        while(contador<8)
            {
              if (listaDeDestinos[contador] == destino)
                {
                    destinoExiste = true;
                    break;

                }

                    contador +=1;

             }

             console.log("Destino existe", destinoExiste);

             if(destinoExiste && podeComprar)
                {
                    console.log("Boa viagem!");
                } else
                    {
                        console.log("Desculpe, tivemos um erro!");
                    }
               


                    for (let cont = 0; cont <8; cont++)
                    {
                      if (listaDeDestinos[contador] == destino)
                        {
                            destinoExiste = true;
                            break;
        
                        }
        
                            contador +=1;
        
                     }