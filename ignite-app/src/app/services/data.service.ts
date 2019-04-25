import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBooks(pageNumber): Observable<any>{
    return this.http.get("http://localhost:8080/"+pageNumber, options).pipe(map(obs => obs));
  }

  postBook(body): Observable<any>{
    return this.http.post("http://localhost:8080/new", body, options).pipe(map(obs => obs));
  }

  editBook(params, body): Observable<any>{
    return this.http.put("http://localhost:8080/edit/"+params, body, options).pipe(map(obs => obs));
  }
}
