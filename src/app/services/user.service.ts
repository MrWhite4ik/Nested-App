import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  localStorageKey = 'nestedapp_user';
  createUser(name: string) {
    return this.http.post<User>(`${enviroment.apiBaseUrl}/users`, {
      name,
    });
  }
  saveUserToStorage(user: User) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }
  getUserFromStorage() {
    const user = localStorage.getItem(this.localStorageKey);
    return user ? (JSON.parse(user) as User) : null;
  }
}
