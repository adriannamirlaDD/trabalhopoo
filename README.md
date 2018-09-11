# Carro-POO
Trabalho de POO (carro). -professor Anderson.

export class Carro{
    pass:number;
    gaso:number;
    km:number;
    constructor (thePass: number, theGaso:number, theKm:number){
        this.pass= thePass;
        this.gaso= theGaso;
        this.km= theKm;
    }
     subir (): void {
        if (this.pass <2) this.pass++;

     }
     descer (): void {
        if (this.pass>0) this.pass--;

     }
    abastecer (): void {
        this.gaso+=quant;
        if (this.gaso>10) this.gaso=10;

    }
    sair (dis:number): void {
        if (this.gaso>= dis/10 && this.pass >= 1)
        {
            this.gaso-= dis/10;
            this.km += dis;
        }
    }


}

#PRINCIPAL

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


