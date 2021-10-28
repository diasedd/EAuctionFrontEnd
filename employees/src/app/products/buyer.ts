export class Buyer { 
        buyerId:number;
        buyerFirstName: string;
        buyerLastName: string;
        buyerAddress: string;
        buyerCity: string;
        buyerState: string;
        buyerPinCode: number;
        buyerEmail: string;
        buyerPhoneNumber: number;
    

    constructor () {
        this.buyerId=0;
        this.buyerFirstName="";
        this.buyerLastName= "";
        this.buyerAddress= "";
        this.buyerCity= "";
        this.buyerState= "";
        this.buyerPinCode= 0;
        this.buyerEmail= "";
        this.buyerPhoneNumber= 0;
    }
}
