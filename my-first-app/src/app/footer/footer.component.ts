import { Component, OnInit } from '@angular/core';

import { UserInformationService } from '.././user-information.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private udata: UserInformationService) { }
  UserInformation = this.udata.userdatas;

  ngOnInit(): void {
  }

}
