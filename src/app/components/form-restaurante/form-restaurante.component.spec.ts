import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRestauranteComponent } from './form-restaurante.component';

describe('FormRestauranteComponent', () => {
  let component: FormRestauranteComponent;
  let fixture: ComponentFixture<FormRestauranteComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
