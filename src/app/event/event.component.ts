import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Evt } from 'src/models/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor(private Es: EventService) {}
  dataSource: Evt[] = [];
  ngOnInit(): void {
    this.Es.getAllEvent().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
