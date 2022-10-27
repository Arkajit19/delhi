import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutemployeeComponent } from './aboutemployee.component';

describe('AboutemployeeComponent', () => {
  let component: AboutemployeeComponent;
  let fixture: ComponentFixture<AboutemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
