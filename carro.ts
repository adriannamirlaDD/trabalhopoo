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
