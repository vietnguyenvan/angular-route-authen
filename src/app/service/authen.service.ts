import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthenService {

  constructor(private _http:HttpClient) { }

  login(): Observable <string> {
    return this._http.get("http://localhost:8080/test", {responseType: "text"})
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isLogedIn(): boolean {
    // let token = localStorage.getItem("token") as string;
    return tokenNotExpired("token");
	}
}
