import { Buyer } from "./buyer";

export class Bid { 
    bidId:number;
    bidAmount:number;
    productId:number;
    buyer:Buyer;

    constructor () {
        this.bidId = 0;
        this.bidAmount = 0;
        this.productId = 0;
        this.buyer=new Buyer();
    }
}
