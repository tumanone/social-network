import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {UserViewComponent} from './user-view/user-view.component';
import {UserFormComponent} from './user-form/user-form.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatMenuModule} from "@angular/material/menu";
import {FormMode} from "../shared/enums/form-mode.enum";
import {UserResolver} from "./resolvers/user.resolver";
import {UsersResolver} from "./resolvers/users.resolver";


export const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    resolve: {
      users: UsersResolver
    }
  },
  {
    path: ':id/view',
    component: UserViewComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'create',
    component: UserFormComponent,
    data: {
      mode: FormMode.CREATE
    }
  },
  {
    path: ':id/edit',
    component: UserFormComponent,
    data: {
      mode: FormMode.UPDATE
    },
    resolve: {
      user: UserResolver
    }
  }
]

@NgModule({
  declarations: [
    UsersListComponent,
    UserViewComponent,
    UserFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  exports: [
    UserFormComponent
  ]
})
export class UsersModule {
}
