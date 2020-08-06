import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishSignUpDialogComponent } from './finish-sign-up-dialog.component';

describe('FinishSignUpDialogComponent', () => {
  let component: FinishSignUpDialogComponent;
  let fixture: ComponentFixture<FinishSignUpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishSignUpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSignUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
