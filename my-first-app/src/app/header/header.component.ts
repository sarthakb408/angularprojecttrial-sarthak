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
  increaseitem(){
    this.count++;
  }
}
