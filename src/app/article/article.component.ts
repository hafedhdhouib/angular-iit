import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Pub } from 'src/models/Pub';
import { PubService } from '../services/pub.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit, AfterViewInit {
  constructor(private pubService: PubService) {}
  dataSource: MatTableDataSource<Pub> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {}
  ngAfterViewInit() {
    this.FetchPub();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  FetchPub() {
    this.pubService.GetAllPub().subscribe((response) => {
      this.dataSource.data = response;
    });
  }
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
