import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-common-layout',
    templateUrl: './common-layout.component.html',
    standalone : true,
  imports: [
    RouterOutlet
  ]
})

export class CommonLayoutComponent {
}
