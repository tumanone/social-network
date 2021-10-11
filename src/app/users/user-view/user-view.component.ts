import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from "../../shared/interfaces/user.interface";
import {UsersService} from "../users.service";
import {UserRole} from "../../shared/enums/user-role.enum";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})

export class UserViewComponent implements OnInit {

  public user?: User;
  public userRole = UserRole;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
     this.userService.getUser(this.route.snapshot.params.id).subscribe(
        data => this.user = data
      )
  }

}
