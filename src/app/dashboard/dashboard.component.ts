import { Component } from '@angular/core';
import { MembreService } from '../services/membre.service';
import { EventService } from '../services/event.service';
import { PubService } from '../services/pub.service';
import { ChartDataset, ChartOptions } from 'chart.js';

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
      data.map((m) => {
        if (m.type == 'Student') {
          this.nbStudent++;
        } else if (m.type == 'Teacher') {
          this.nbTeacher++;
        }
      });
      this.chartDataPie = [
        {
          data: [this.nbStudent, this.nbTeacher],
        },
      ];
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
  nbStudent: number = 0;
  nbTeacher: number = 0;
  chartDataPie: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [1551, 1688, 1800, 1895, 2124, 2124],
    },
  ];
  chartLabelsPie: string[] = ['Student', 'Teacher'];
  chartDataLine: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [1551, 1688, 1800, 1895, 2124, 2124],
    },
  ];
  chartLabelsLine: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

  chartOptions: ChartOptions = {};
}
