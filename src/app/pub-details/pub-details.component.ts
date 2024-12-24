import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Pub } from 'src/models/Pub';

@Component({
  selector: 'app-pub-details',
  templateUrl: './pub-details.component.html',
  styleUrls: ['./pub-details.component.css'],
})
export class PubDetailsComponent {
  constructor(
    private dialogueRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.pub = data;
  }

  pub!: Pub;
}
