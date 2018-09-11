var readline = require('readline-sync');
import{carro} from "./carro"{
let car =new carro(0,0,0);
console.log(carro);
let menu= "";
while (true){ 
    menu=readline.question("Digite sua opção: ");
    switch(menu){
        case "subir":
        c.subir();
        break;
        
        case "descer":
        c.descer();
        break;

        case "abastecer":
        let abas = readline.question("Informe seu abastecimento: ");
        c.abastecer(parseFloat(dis))
        break;

        case "sair":
        let dis = readline.question("Informe sua distancia: ");
        c.andar(parseFloat(dis));
        break;

        case "visualizar":
        console.log(c.show());
        break;


        

    }
}

}