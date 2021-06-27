import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private publicUrl = 'http://localhost/api/public';
  private protectedUrl = 'http://localhost/api/protected';

  constructor(private http: HttpClient) { }

  getPublicData(): Observable<String> {
    return this.http.get<String>(this.publicUrl)
  }


  getProtectedData(): Observable<String> {
    return this.http.get<String>(this.protectedUrl)
  }
}
