import { Component, OnInit } from '@angular/core';
import { MembreService } from '../services/membre.service';
import { ConfirmeDialogueComponent } from '../confirme-dialogue/confirme-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

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
    'action',
  ];
  constructor(
    private memberService: MembreService,
    private dialog: MatDialog
  ) {}
  dataSource: any[] = [];
  ngOnInit() {
    this.memberService.getAllMembers().subscribe((data) => {
      this.dataSource = data;
    });
  }
  open(id: number): void {
    let dialogRef = this.dialog.open(ConfirmeDialogueComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.memberService.deleteById(id).subscribe((data) => {
          this.memberService.getAllMembers().subscribe((data) => {
            this.dataSource = data;
          });
        });
      }
    });
  }
}
