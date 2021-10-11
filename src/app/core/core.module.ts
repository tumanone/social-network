import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {SharedModule} from '../shared/shared.module';
import {ContentComponent} from './content/content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ]
})
export class CoreModule { }
