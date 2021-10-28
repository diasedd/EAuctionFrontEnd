import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Bid } from './bid';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  product:Product=new Product();
  modifiedtext:string="";
  productSelected:number=0;
  bids:Bid[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products =[]
    this.productSelected=0;
  }


  onFetch() :void{
    console.log("Products");
    this.productService.getProductList().subscribe(
      data=> {
        this.products =data;
      }
    )
  }

  onFetchBids() :void{
    console.log("Fetch Bids");
    this.productService.getBidsByProductId(this.productSelected).subscribe(
      data=> {
        this.bids =data;
      }
    )
  }

  onProductSelected(val:any) {
    this.getProductsById(val);
  }

  getProductsById(val:any) {
    this.productService.getProductById(val).subscribe(
      data=> {
        this.product = data;
      }
    )
  }
}
