import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckExemploComponent } from './check-exemplo.component';

describe('CheckExemploComponent', () => {
  let component: CheckExemploComponent;
  let fixture: ComponentFixture<CheckExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckExemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
