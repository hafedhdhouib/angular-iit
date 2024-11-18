import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MembreService } from '../services/membre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  constructor(private memberService: MembreService, private router: Router) {}
  forms!: FormGroup;
  ngOnInit() {
    this.forms = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }
  sub(): void {
    console.log(this.forms.value);
    this.memberService.inserMember(this.forms.value).subscribe((e) => {
      this.router.navigate(['']);
    });
  }
}
