import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MembreService } from '../services/membre.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  constructor(
    private memberService: MembreService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}
  idCourant!: string;
  forms!: FormGroup;
  ngOnInit() {
    this.idCourant = this.ActivatedRoute.snapshot.params['id'];
    if (this.idCourant) {
      this.memberService.getMemberByid(this.idCourant).subscribe((data) => {
        console.log(data);

        this.forms = new FormGroup({
          id: new FormControl(data.id, [Validators.required]),
          cin: new FormControl(data.cin, [Validators.required]),
          name: new FormControl(data.name, [Validators.required]),
          cv: new FormControl(data.cv, [Validators.required]),
          type: new FormControl(data.type, [Validators.required]),
        });
      });
    } else {
      this.forms = new FormGroup({
        cin: new FormControl('/member', [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        cv: new FormControl(null, [Validators.required]),
        type: new FormControl(null, [Validators.required]),
      });
    }
  }
  sub(): void {
    if (this.idCourant) {
      this.memberService
        .updateByid(this.forms.value, this.idCourant)
        .subscribe((e) => {
          this.router.navigate(['/member']);
        });
    } else {
      this.memberService.inserMember(this.forms.value).subscribe((e) => {
        this.router.navigate(['/member']);
      });
    }
    console.log(this.forms.value);
  }
}
