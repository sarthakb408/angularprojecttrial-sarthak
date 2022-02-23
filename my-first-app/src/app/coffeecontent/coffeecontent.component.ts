import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffeecontent',
  templateUrl: './coffeecontent.component.html',
  styleUrls: ['./coffeecontent.component.css']
})
export class CoffeecontentComponent implements OnInit {

  image1url = ".././assets/images/coffeeimage1.jfif";
  image2url = ".././assets/images/coffeeimage2.jfif";

  image3url = ".././assets/images/coffeeimage3.jfif";
  constructor() { }

  ngOnInit(): void {
  }

}
