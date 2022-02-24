import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // firstname="";
  // lastname="";
  // formdata="";
  // titleheading = "My First App";
  // pcont = "This is my first Application.";
  // imgurl = ".././assets/images/image1.jpg";

  // count = 0;
  // counterval(){
  //   return this.count++;

  // }

  // fname= "";
  // fillname(){
  //   return this.fname= "My name is Sarthak";
  // }

  fname = "Sarthak";
  lname = "Bhadiyadara";

  able=true;

  gnumber:any;
  evenodd(){
    if(this.gnumber%2 == 0){
      return true;
    }else{
      return false;
    }
  }

  numArrays = [10,20,30,40,50];
  strArrays = ["abc","xyz","pqr"];
  str1Arrays = ["Surat","Ahemadabad","Vapi","Gandhinagar","Rajasthan"];
  str2Arrays = ["Liam","Olivia","Noah","Emma","Oliver","Ava","Elijah","Charlotte","William","Sophia","James"];

  item="laptop"

  str3Arrays = ["Coffee","Tea","Cold-coffee","Mocha","Cappuccino"];
}