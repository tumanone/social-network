import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {User} from "../../shared/interfaces/user.interface";
import {UsersService} from "../users.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(
    private userService: UsersService
  ) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.userService.getUser(route.params.id);
  }
}
