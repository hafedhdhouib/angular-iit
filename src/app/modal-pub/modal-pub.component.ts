import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pub',
  templateUrl: './modal-pub.component.html',
  styleUrls: ['./modal-pub.component.css'],
})
export class ModalPubComponent {
  constructor(private dialogRef: MatDialogRef<ModalPubComponent>) {
    this.form = new FormGroup({
      Titre: new FormControl(null),
      Date: new FormControl(null),
      Type: new FormControl(null),
      Lien: new FormControl(null),
      Sourcepdf: new FormControl(null),
    });
  }

  form!: FormGroup;
  save() {
    this.dialogRef.close(this.form.value);
  }
  close() {
    this.dialogRef.close();
  }
}
