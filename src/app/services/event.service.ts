import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/models/Event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}
  
  updateByID(event: any): Observable<any> {
  return this.httpClient.put<any>(
    `http://localhost:3000/Evt/${event.id}`,
    event
    );
  }
  getAllEvent(): Observable<Evt[]> {
    return this.httpClient.get<Evt[]>('http://localhost:3000/Evt');
  }
  getEventByID(id: string): Observable<Evt> {
    return this.httpClient.get<Evt>(`http://localhost:3000/Evt/${id}`);
  }
  addEvent(event: Evt): Observable<Evt> {
    return this.httpClient.post<Evt>('http://localhost:3000/Evt', event);
  }
}
