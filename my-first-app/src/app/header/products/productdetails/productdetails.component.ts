import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() product1Event = new EventEmitter();
    additem(){
      this.product1Event.emit();
    }
  img1url = ".././assets/images/product1.jfif"
}
