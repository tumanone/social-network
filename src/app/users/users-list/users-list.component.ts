import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../../shared/interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {FormMode} from "../../shared/enums/form-mode.enum";


@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'age', 'role', 'email', 'info', 'education', 'actions'];
  public userList: User[];
  public mode: FormMode;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.userList = this.route.snapshot.data.users;
    this.userService.newUserSub.subscribe(user => this.userList = [...this.userList, user])

  }

  public editUser(userId: number): void {
    this.router.navigate([userId, 'edit']).then();
  }

  public deleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe()
  }
}
