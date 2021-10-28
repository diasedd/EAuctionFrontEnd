export class Product { 
    productId:number;
    productName:string;
    shortDescription: string; 
    detailedDescription:String;
    category:String;
    startingPrice:number;
    bidEnddate:Date; 
    seller:Object;

    constructor () {
        this.productId = 0;
        this.productName = "";
        this.shortDescription = "";
        this.detailedDescription="";
        this.category="";
        this.startingPrice=0;
        this.bidEnddate=new Date(0);
        this.seller={};
    }
}
