import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      lastName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      Email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      Select: new FormControl('neutral', Validators.required),
      Review: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(500)],
      }),
      Date: new FormControl(
        formatDate(new Date(), 'yyyy-MM-dd', 'en'),
        Validators.required
      ),
      Rating:new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    alert("Form submitted");
  }
}
