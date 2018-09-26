import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthenService {

  constructor(private _http:HttpClient) { }

  login(): Observable <string> {
    return of("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIn0.ZhmtWZOhodjm5knipDZ6Hfp5iZUzZXRrYaUofWWDk7w");
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isLogedIn(): boolean {
    // let token = localStorage.getItem("token") as string;
    return tokenNotExpired("token");
	}
}
