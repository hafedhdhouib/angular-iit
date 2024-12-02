import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}
  getAllEvent(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('http://localhost:3000/events');
  }
}
