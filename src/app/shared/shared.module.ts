import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {ThemeConstantService} from './services/theme-constant.service';
import {SearchPipe} from './pipes/search.pipe';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    SearchPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    NzIconModule,
    NzToolTipModule,
  ],
  declarations: [
    SearchPipe
  ],
  providers: [
    ThemeConstantService
  ]
})

export class SharedModule {
}
