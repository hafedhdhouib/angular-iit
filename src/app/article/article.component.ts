import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Pub } from 'src/models/Pub';
import { PubService } from '../services/pub.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalPubComponent } from '../modal-pub/modal-pub.component';
import { PubDetailsComponent } from '../pub-details/pub-details.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit, AfterViewInit {
  constructor(private pubService: PubService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  dataSource!: MatTableDataSource<Pub>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.FetchPub();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  FetchPub() {
    this.pubService.GetAllPub().subscribe((response) => {
      this.dataSource.data = response;
    });
  }
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  open() {
    let dialogRef = this.dialog.open(ModalPubComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.pubService.add(res).subscribe(() => {
        this.FetchPub();
      });
    });
  }
  openDetails(id: string) {
    let dialogConfig = new MatDialogConfig();
    this.pubService.getById(id).subscribe((data) => {
      dialogConfig.data = data;
      dialogConfig.width = '200px';
      let dialogRef = this.dialog.open(PubDetailsComponent, dialogConfig);
    });
  }
}
