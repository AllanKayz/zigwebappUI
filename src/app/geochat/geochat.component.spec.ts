import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeochatComponent } from './geochat.component';

describe('GeochatComponent', () => {
  let component: GeochatComponent;
  let fixture: ComponentFixture<GeochatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeochatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeochatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
