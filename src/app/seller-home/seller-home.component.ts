import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[] ;
  icon=faTrash;
  edit=faEdit;
  productMessage: string|undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.list();
  }
  list()
  {
    this.product.productList().subscribe((result)=>{
      this.productList = result;
    });
  }

deleteProduct(id:number)
{
  this.product.deleteProduct(id).subscribe((result)=>{
    if(result)
    {
      this.productMessage = 'Product is deleted';
      this.list();
    }
  })
  setTimeout(() => {
    this.productMessage = undefined;
  }, 3000);

}

}
