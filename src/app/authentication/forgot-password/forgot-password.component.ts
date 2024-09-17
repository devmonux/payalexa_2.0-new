import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzButtonComponent} from "ng-zorro-antd/button";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass,
    RouterLink,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzInputDirective,
    NzInputGroupComponent,
    NzColDirective,
    NzRowDirective,
    NzButtonComponent
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  forgotPasswordFrom = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    mobile: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });
  loginFormSubmitted: boolean | undefined;

  isDivPasswordVisible: boolean = true;
  isDivOtpVisible: boolean = false;

  toggleVisibility() {
    this.isDivPasswordVisible = !this.isDivPasswordVisible;
    this.isDivOtpVisible = !this.isDivOtpVisible;
  }

}
