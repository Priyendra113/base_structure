import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcDashboardComponent } from './jc-dashboard.component';

describe('JcDashboardComponent', () => {
  let component: JcDashboardComponent;
  let fixture: ComponentFixture<JcDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JcDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
