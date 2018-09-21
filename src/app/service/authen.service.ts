import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private _http:HttpClient) { }

  login(): Observable <string> {
    return this._http.get("http://localhost:8080/test", {responseType: "text"})
  }

  isAuthenticated(): boolean {
  

		return localStorage.getItem("token")? true : false
	}
}
