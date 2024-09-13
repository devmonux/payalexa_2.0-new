import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzCheckboxComponent} from 'ng-zorro-antd/checkbox';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzFormDirective, NzFormControlComponent, NzFormLabelComponent, NzFormItemComponent} from 'ng-zorro-antd/form';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';
import {SvgIconComponent} from 'angular-svg-icon';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {AuthService} from '../../shared/services/auth.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    NzFormDirective,
    NzFormControlComponent,
    NzFormLabelComponent,
    NzInputDirective,
    NzCheckboxComponent,
    NzButtonComponent,
    NgForOf,
    SvgIconComponent,
    ReactiveFormsModule,
    NzInputGroupComponent,
    NzFormItemComponent,
    NzRowDirective,
    NzColDirective,
    NzIconDirective,
    ToastrModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  isLoading = false;
  error = false;
  passwordVisible = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService,
              private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.validateForm = this.fb.group({
      userName: ['hexadash@dm.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.isLoading = true;
      console.log('submit', this.validateForm.value);
      this.router.navigate(['retailer/agent-authentication']).finally(() => {
        this.isLoading = false;
      });
    } else {
      this.markFormGroupTouched(this.validateForm);
      this.error = true;
    }


    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    this.authService.login(this.validateForm.value).subscribe({
      next: (res) => {
        this.spinner.hide();
        this.toastr.success(res.message);
      },
      error: (error) => {
        this.spinner.hide();
        this.toastr.error(error.error.error);
      },

    });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsDirty();
      control.updateValueAndValidity({onlySelf: true});
    });
  }
}
