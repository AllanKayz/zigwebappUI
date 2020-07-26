import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigComponent } from './zig.component';

describe('ZigComponent', () => {
  let component: ZigComponent;
  let fixture: ComponentFixture<ZigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
