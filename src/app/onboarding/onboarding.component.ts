import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {RouterLink} from "@angular/router";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzFormDirective,
    NzColDirective,
    NzRowDirective,
    NzInputDirective,
    NzCheckboxComponent,
    NzButtonComponent,
    RouterLink,
    NzSelectComponent,
    NzOptionComponent,
    FormsModule,
    NzDatePickerComponent
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent implements OnInit{

  signUpForm!: FormGroup;
  error = false;
  date = null;

  submitForm(): void {
    for (const i in this.signUpForm.controls) {
      this.signUpForm.controls[i].markAsDirty();
      this.signUpForm.controls[i].updateValueAndValidity();
    }
  }


  constructor(private fb: FormBuilder) {
  }

  passwordVisible = false;
  password?: string;

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      first_name: [null, [Validators.required]],
      middle_name: [null],
      lname: [null, [Validators.required]],
      fname: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      email: [null, [Validators.required]],
      pincode: [null, [Validators.required]],
      state: [null, [Validators.required]],
      district: [null, [Validators.required]],
      city: [null, [Validators.required]],
      address: [null, [Validators.required]],
      agree: [false]
    });
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
