import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {NZ_I18N, en_US} from 'ng-zorro-antd/i18n';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzSpinModule} from 'ng-zorro-antd/spin';

import {registerLocaleData, PathLocationStrategy, LocationStrategy} from '@angular/common';
import en from '@angular/common/locales/en';

import {AppRoutingModule} from './app-routing.module';
import {TemplateModule} from './shared/template/template.module';
import {SharedModule} from './shared/shared.module';

import {BaseChartDirective} from 'ng2-charts';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {FullCalendarModule} from '@fullcalendar/angular';

import {AppComponent} from './app.component';
import {CommonLayoutComponent} from './layouts/common-layout/common-layout.component';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';
import {ThemeConstantService} from './shared/services/theme-constant.service';
import {NgApexchartsModule} from 'ng-apexcharts';
import {provideToastr} from "ngx-toastr";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
  ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TemplateModule,
    SharedModule,
    NzBreadCrumbModule,
    NzSpinModule,
    BaseChartDirective,
    NgApexchartsModule,
    FullCalendarModule,
    AngularSvgIconModule.forRoot(), CommonLayoutComponent], providers: [
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    ThemeConstantService,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ]
})
export class AppModule {
}
