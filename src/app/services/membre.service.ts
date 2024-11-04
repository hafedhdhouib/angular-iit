import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MembreService {
  constructor(private httpClient: HttpClient) {}

  //REQURST GET

  getAllMembers(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/members');
  }
}
