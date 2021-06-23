import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private publicUrl = 'http://localhost:8085/public';
  private protectedUrl = 'http://localhost:8085/protected';

  constructor(private http: HttpClient) { }

  getPublicData(): Observable<String> {
    return this.http.get<String>(this.publicUrl)
  }


  getProtectedData(): Observable<String> {
    return this.http.get<String>(this.protectedUrl)
  }
}
