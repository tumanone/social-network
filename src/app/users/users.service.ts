import {Injectable} from '@angular/core';
import {User} from '../shared/interfaces/user.interface';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userSub: Subject<User|undefined> = new Subject<User|undefined>();
  public newUserSub: Subject<User> = new Subject<User>();
  private apiUrl: string = 'http://localhost:3000';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}


  public getUser(id: number): Observable<User> {
    return this.http.get<User[]>(`${this.apiUrl}/users/?id=${id}`).pipe(map(users => users[0]));
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User[]>(`${this.apiUrl}/users/?email=${email}`).pipe(map(users => users[0]))
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  public createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, newUser)
  }

  public updateUser(user: User): Observable<User> {
    console.log(`${this.apiUrl}/users/${user.id}`)
    console.log(user)
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  public deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${user.id}`)
  }
}
