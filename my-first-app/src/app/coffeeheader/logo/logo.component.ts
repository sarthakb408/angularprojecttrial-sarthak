import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  imgurl = ".././assets/images/coffeelogo.jfif"
  constructor() { }

  ngOnInit(): void {
  }

  @Input () namereceived = "";
}
