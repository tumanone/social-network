import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UsersService} from "../users.service";
import {User} from "../../shared/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

  constructor(
    private userService: UsersService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.userService.getUsers();
  }
}
