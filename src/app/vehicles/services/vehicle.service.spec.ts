import { TestBed } from '@angular/core/testing';
import { VehicleService } from './vehicle.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { CARS, CAR_MOCK } from '../mocks/vehicles.mock';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(VehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  })

  it('should be call "getVehicles()"', () => {
    const spy = spyOn(service, 'getVehicles').and.returnValue(of(CARS));
    service.getVehicles();
    expect(spy).toHaveBeenCalled();
  });

  it('should be call "getVehicleById()"', () => {
    const spy = spyOn(service, 'getVehicleById').and.returnValue(of(CAR_MOCK));
    service.getVehicleById(0);
    expect(spy).toHaveBeenCalledWith(0);
  });

  it('should be call "createVehicle()"', () => {
    const spy = spyOn(service, 'createVehicle').and.returnValue(of(CAR_MOCK));
    service.createVehicle(CAR_MOCK);
    expect(spy).toHaveBeenCalledWith(CAR_MOCK);
  });

  it('should be call "editVehicle()"', () => {
    const spy = spyOn(service, 'editVehicle').and.returnValue(of(CAR_MOCK));
    service.editVehicle(CAR_MOCK);
    expect(spy).toHaveBeenCalledWith(CAR_MOCK);
  });

  it('should be call "removeVehicle()"', () => {
    const spy = spyOn(service, 'removeVehicle').and.returnValue(of({}));
    service.removeVehicle(0);
    expect(spy).toHaveBeenCalledWith(0);
  });
})
