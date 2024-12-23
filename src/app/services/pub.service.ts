import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pub } from 'src/models/Pub';

@Injectable({
  providedIn: 'root',
})
export class PubService {
  constructor(private httpClient: HttpClient) {}

  GetAllPub(): Observable<Pub[]> {
    return this.httpClient.get<Pub[]>('http://localhost:3000/Pub');
  }

  
}
