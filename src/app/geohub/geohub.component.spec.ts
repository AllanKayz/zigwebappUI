import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeohubComponent } from './geohub.component';

describe('GeohubComponent', () => {
  let component: GeohubComponent;
  let fixture: ComponentFixture<GeohubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeohubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeohubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
