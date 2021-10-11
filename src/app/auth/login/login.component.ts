import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../users/users.service";
import {User} from "../../shared/interfaces/user.interface";
import {LocalStorageService} from "../../local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  private user: User

  constructor(
    private userService: UsersService,
    private localStorageHelper: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', Validators.required)
    })
  }


  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    } else {
      const email = this.loginForm.controls.email.value
      this.userService.getUserByEmail(email).subscribe(
        data => {
          if(data) {
            this.localStorageHelper.setUserEmail(data.email)
            this.userService.userSub.next(data)
            this.router.navigate(['']).then()
          }
        }
      )
    }
  }
}

