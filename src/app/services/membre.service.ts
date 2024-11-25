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
  inserMember(membre: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/members', membre);
  }
  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/members/${id}`);
  }
  getMemberByid(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/members/${id}`);
  }
  updateByid(member: any, id: string): Observable<any> {
    return this.httpClient.put<any>(
      `http://localhost:3000/members/${id}`,
      member
    );
  }
}
