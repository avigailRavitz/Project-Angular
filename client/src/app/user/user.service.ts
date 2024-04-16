import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { User } from '../entities/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = 'https://localhost:7268/api/User'

  constructor(private http: HttpClient) { }


  getUserFromServer(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:7268/api/User')
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>('https://localhost:7268/api/User/'+id)
  }

  addUser(user: User): Observable<User[]> {
    console.log("addUser(user: User)",user)
    return this.http.post<User[]>('https://localhost:7268/api/User', user);
  }
//   updateUser(user:User,id:number): Observable<User> {
//     return this.http.put(`https://localhost:7268/api/User/${id}`,user)
// }

}

