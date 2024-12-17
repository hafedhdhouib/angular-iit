import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Evt } from 'src/models/Event';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor(private Es: EventService, private dialog: MatDialog) {}
  dataSource = new MatTableDataSource();
  ngOnInit(): void {
    this.Es.getAllEvent().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  open(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      height: '400px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        console.log(res);

        this.Es.addEvent(res).subscribe((data) => {
          if (data) {
            this.Es.getAllEvent().subscribe((data) => {
              this.dataSource.data = data;
            });
          }
        });
      }
    });
  }
  openToUpdate(id: string): void {
    const dialogConfig = new MatDialogConfig();
    this.Es.getEventByID(id).subscribe((e) => {
      dialogConfig.data = e;
      dialogConfig.width = '400px';
      dialogConfig.height = '300px';
      let dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    });
  }
}
