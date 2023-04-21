import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';



@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  deleteServer(id: number): Observable<Object>{
    return this.http.delete(`${this.usersUrl}/${id}`);
  }
  
  updateServer(id: number, user: User): Observable<Object>{
    return this.http.put(`${this.usersUrl}/${id}`, user);
  }
  getServerById(id: number): Observable<User>{
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }


}