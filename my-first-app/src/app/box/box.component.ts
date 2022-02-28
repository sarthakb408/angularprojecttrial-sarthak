import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '.././user-information.service'
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  constructor(public udata: UserInformationService) { }
  UserInformation = this.udata.userdatas;
  
  text=this.udata.senddata();
  ngOnInit(): void {
  }

}
