import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }


  createUser(user: any): Observable<any[]> {
    return this.http.post<any>("url", user)
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any>("url")
  }

  updateUser(id: number): any {
    return this.http.put<any>("url/2", { fullName: "naveenkumar" })
  }

  deletedUser(id: number): any {
    return this.http.delete<any>("url")
  }

}
