import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Evt } from 'src/models/Event';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  event!: Evt;
  form!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: Evt
  ) {
    this.event = data;
    this.form = new FormGroup({
      id: new FormControl(this.event ? this.event.id : null),
      title: new FormControl(this.event ? this.event.title : null, [
        Validators.required,
      ]),
      dateDebut: new FormControl(this.event ? this.event.dateDebut : null),
      dateFin: new FormControl(this.event ? this.event.dateFin : null),
      lieu: new FormControl(this.event ? this.event.lieu : null, [
        Validators.required,
      ]),
    });
  }
  ngOnInit(): void {}

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
