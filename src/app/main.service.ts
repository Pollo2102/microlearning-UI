import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  API_LINK= 'http://microlearning-api-dev.us-east-2.elasticbeanstalk.com/api';

  constructor(private http: HttpClient) { }

  saveUser(user: User) {
    return this.http.post(`${this.API_LINK}/users`, user);
  };

  editUser(user: User) {
    return this.http.put(`${this.API_LINK}/users/${user.email}`, user);
  };

  deleteUser(email: string) {
    return this.http.delete(`${this.API_LINK}/users/${email}`);
  };
}
