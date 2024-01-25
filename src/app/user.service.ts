import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/api/v1/users";
  constructor(private httpClient : HttpClient) { }
  getUserList(): Observable<User []>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user:User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

 getUserById(id: number): Observable<User>{
  return this.httpClient.get<User>(`${this.baseURL}/${id}`);
 }

 updateUser(id: number, user: User ): Observable<User>{
  return this.httpClient.put<User>(`${this.baseURL}/${id}`, user);

 }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
