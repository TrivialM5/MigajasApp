import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiRestaurantePage } from './mi-restaurante.page';

describe('MiRestaurantePage', () => {
  let component: MiRestaurantePage;
  let fixture: ComponentFixture<MiRestaurantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
