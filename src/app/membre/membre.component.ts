import { Component, OnInit } from '@angular/core';
import { MembreService } from '../services/membre.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css'],
})
export class MembreComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'type',
    'cv',
    'createdDate',
  ];
  constructor(private memberService: MembreService) {}
  dataSource: any[] = [];
  ngOnInit() {
    this.memberService.getAllMembers().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
