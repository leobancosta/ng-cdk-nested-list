import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGridItemComponent } from './app-grid-item.component';

describe('AppGridItemComponent', () => {
  let component: AppGridItemComponent;
  let fixture: ComponentFixture<AppGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
