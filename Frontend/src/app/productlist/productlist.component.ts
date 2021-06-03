import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

 
  title:String="Products List"

  //  product
  
  products! : ProductModel[];
//  image
imageWidth: number=50;
imageMargin: number=2;

//  service

constructor(private productService: ProductService) { }
  ngOnInit(): void {

    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data)); 
    })
  }

}
