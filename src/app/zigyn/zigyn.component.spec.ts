import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigynComponent } from './zigyn.component';

describe('ZigynComponent', () => {
  let component: ZigynComponent;
  let fixture: ComponentFixture<ZigynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZigynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZigynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
