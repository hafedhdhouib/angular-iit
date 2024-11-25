import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirme-dialogue',
  templateUrl: './confirme-dialogue.component.html',
  styleUrls: ['./confirme-dialogue.component.css']
})
export class ConfirmeDialogueComponent {
  //forcage de type
  constructor( public dialogRef:MatDialogRef<ConfirmeDialogueComponent>){
    
  }
}
