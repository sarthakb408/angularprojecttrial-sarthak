import { Component, OnInit, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm:any;
  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // });
    this.myForm = this.fb.group({
      name : ['James', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      message : ['', [Validators.required, Validators.minLength(15)]]
    });
  }
  onSubmit(form: FormGroup){
    console.log('valid?' , form.value)
    console.log('Name' , form.value.name);
    console.log('Email' , form.value.email);
    console.log('Message' , form.value.message);
  }

}
