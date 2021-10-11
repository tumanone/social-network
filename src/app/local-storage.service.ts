import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class LocalStorageService {

  constructor() {
  }

  public getUserEmail(): string | null {
    return localStorage.getItem('email')
  }

  public setUserEmail(email: string): void {
    localStorage.setItem('email', email)
  }

  public deleteUserEmail(): void {
    localStorage.clear()
  }

}
