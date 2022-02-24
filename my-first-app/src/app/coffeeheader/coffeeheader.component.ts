import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffeeheader',
  templateUrl: './coffeeheader.component.html',
  styleUrls: ['./coffeeheader.component.css']
})
export class CoffeeheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "Student Hostel";
}
