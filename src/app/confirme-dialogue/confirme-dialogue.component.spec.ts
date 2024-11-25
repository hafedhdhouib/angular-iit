import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeDialogueComponent } from './confirme-dialogue.component';

describe('ConfirmeDialogueComponent', () => {
  let component: ConfirmeDialogueComponent;
  let fixture: ComponentFixture<ConfirmeDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmeDialogueComponent]
    });
    fixture = TestBed.createComponent(ConfirmeDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
