import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../users/users.service";
import {User} from "../../shared/interfaces/user.interface";
import {LocalStorageService} from "../../local-storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser?: User;

  constructor(
    private userService: UsersService,
    private localStorageHelper: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userService.userSub.subscribe(user => {
      this.currentUser = user
    });
   this.checkUserAuth();
  }

  private checkUserAuth(): void {
    const email = this.localStorageHelper.getUserEmail();
    if(email) {
      this.userService.getUserByEmail(email).subscribe(
        data => {
          if (data) {
            this.userService.userSub.next(data)
          }
        })
    }
  }

  public userLogout(): void {
    this.localStorageHelper.deleteUserEmail()
    this.userService.userSub.next(undefined)
    this.router.navigate(['']).then()
  }
}

