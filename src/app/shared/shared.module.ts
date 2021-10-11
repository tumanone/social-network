import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {LayoutModule} from "@angular/cdk/layout";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MapFormGroupPipe} from './pipes/map-form-group.pipe';
import {ShortNamePipe} from './pipes/short-name.pipe'
import {EducationShowPipe} from "./pipes/education-show.pipe";
import {UserStatusDirective} from "./directives/user-status.directive";


@NgModule({
  declarations: [
    MapFormGroupPipe,
    ShortNamePipe,
    EducationShowPipe,
    UserStatusDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MapFormGroupPipe,
    ShortNamePipe,
    EducationShowPipe
  ]
})
export class SharedModule {
}
