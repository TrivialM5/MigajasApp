import { TestBed } from '@angular/core/testing';
import { CarritoServiceTs } from './carrito-service.ts';

describe('CarritoServiceTs', () => {
  let service: CarritoServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
