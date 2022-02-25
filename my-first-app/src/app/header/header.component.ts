import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() itemreceived = "";
  @Input() sreceived:any;

  imgurl = ".././assets/images/coffeelogo.jfif"
  carturl = ".././assets/images/shoppingcart.png"

  count:any="0";
  totalquantity = 0;
  bill= 0;
  cartitems=[
    {
      "id": "",
      "productname": "",
      "price": "",
      "quantity": "",
      "manufacturinglocation": "",
      "presentstock": "",

    }
  ]
  increaseitem(){
    this.count++;
  }
  decreaseitem(){
    this.count--;
  }
  addtocart(data : any){
    this.cartitems.push(data);
    this.totalquantity += Number(data.quantity);
    this.bill += Number(data.quantity) * Number(data.price);

  }
}
