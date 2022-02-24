import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() newItemEvent = new EventEmitter();
    additem(){
      this.newItemEvent.emit();
  
    }

  img1url = ".././assets/images/product1.jfif"
  img2url = ".././assets/images/product2.jfif"
  img3url = ".././assets/images/product3.jfif"

}
