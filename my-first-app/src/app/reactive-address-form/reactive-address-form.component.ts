import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: any;
  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   firstname: new FormControl(''),
    //   lastname: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    //   address: new FormControl(''),
    //   city: new FormControl(''),
    //   age: new FormControl(''),
    //   phone: new FormControl('')
    // });
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', [Validators.required, Validators.maxLength(2)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }
  onSubmit(form: FormGroup) {
    console.log('valid?', form.value);
    console.log('First Name:', form.value.firstname);
    console.log('Last Name:', form.value.lastname);
    console.log('Email:', form.value.email);
    console.log('Password:', form.value.password);
    console.log('Address:', form.value.address);
    console.log('City:', form.value.city);
    console.log('Age:', form.value.age);
    console.log('Phone:', form.value.phone);
    let from = new Date(form.value.from).getTime();
    let to = new Date(form.value.to).getTime();
    let days = (to - from) / (1000 * 3600 * 24);
    let price = 1000;
    console.log("Total amount for booking is " + (price) * days + " for " + days + " days.");
  }
}
