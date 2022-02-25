import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count:any="0";
  @Output() newItemEvent = new EventEmitter();
    additem(productData:any){
      this.newItemEvent.emit(productData);
      this.count++;
    }
  @Output() rmvItemEvent = new EventEmitter<any>();
  removeitem(){
    this.rmvItemEvent.emit();
    this.count--;
  }

  img1url = ".././assets/images/product1.jfif"
  img2url = ".././assets/images/product2.jfif"
  img3url = ".././assets/images/product3.jfif"
  img4url = ".././assets/images/product4.jfif"

  description = false;
  show_description(){
    if(this.description == false){
      this.description = true;
    }else{
      this.description = false;
    }
  }

  data = [
    {
      "id": 1,
      "productname": "Black Tea",
      "price": "Rs.80/-",
      "quantity": "40",
      "manufacturinglocation": "Vadodara",
      "presentstock": "40",
    },
    {
      "id": 2,
      "productname": "Cold Coffee",
      "price": "Rs.120/-",
      "quantity": "30",
      "manufacturinglocation": "Vadodara",
      "presentstock": "30",
    },
    {
      "id": 3,
      "productname": "Mocha",
      "price": "Rs.150/-",
      "quantity": "35",
      "manufacturinglocation": "Vadodara",
      "presentstock": "35",
    },
    {
      "id": 4,
      "productname": "Irish Coffee",
      "price": "Rs.200/-",
      "quantity": "60",
      "manufacturinglocation": "Vadodara",
      "presentstock": "60",
    }
  ]


}
