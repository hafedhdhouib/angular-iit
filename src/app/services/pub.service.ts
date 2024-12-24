import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pub } from 'src/models/Pub';

@Injectable({
  providedIn: 'root',
})
export class PubService {
  constructor(private httpClient: HttpClient) {}
  getById(id: string): Observable<Pub> {
    return this.httpClient.get<Pub>(`http://localhost:3000/Pub/${id}`);
  }
  GetAllPub(): Observable<Pub[]> {
    return this.httpClient.get<Pub[]>('http://localhost:3000/Pub');
  }
  add(data: Pub): Observable<any> {
    return this.httpClient.post('http://localhost:3000/Pub', data);
  }
}
