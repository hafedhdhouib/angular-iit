import { Component, OnInit } from '@angular/core';
import { Pub } from 'src/models/Pub';
import { PubService } from '../services/pub.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  constructor(private pubService: PubService) {}
  dataSource: Pub[] = [];
  ngOnInit() {
    this.FetchPub();
  }

  FetchPub() {
    this.pubService.GetAllPub().subscribe((response) => {
      this.dataSource = response;
    });
  }
}
