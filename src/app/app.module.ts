import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    UsersModule,
    AuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
