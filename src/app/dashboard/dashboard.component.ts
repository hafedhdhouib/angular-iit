import { Component } from '@angular/core';
import { MembreService } from '../services/membre.service';
import { EventService } from '../services/event.service';
import { PubService } from '../services/pub.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private membreService: MembreService,
    private eventService: EventService,
    private pubService: PubService
  ) {
    this.membreService.getAllMembers().subscribe((data) => {
      this.nbMemebers = data.length;
    });
    this.eventService.getAllEvent().subscribe((data) => {
      this.nbEvent = data.length;
    });
    this.pubService.GetAllPub().subscribe((data) => {
      this.nbPub = data.length;
    });
  }
  nbMemebers: number = 0;
  nbEvent: number = 0;
  nbPub: number = 0;
  nbTools: number = 0;
}
