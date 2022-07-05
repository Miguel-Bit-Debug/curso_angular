import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowaybindingComponent } from './towaybinding.component';

describe('TowaybindingComponent', () => {
  let component: TowaybindingComponent;
  let fixture: ComponentFixture<TowaybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowaybindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
