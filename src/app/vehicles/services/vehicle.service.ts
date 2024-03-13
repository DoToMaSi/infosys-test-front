import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVehicle } from '../models/vehicle.model';
import { ENVIROMENT } from 'src/environments/environtment';

@Injectable()
export class VehicleService {

  environment = ENVIROMENT

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<IVehicle[]>(`${this.environment.endpoint}/vehicles`);
  }

  getVehicleById(index: number) {
    return this.http.get<IVehicle>(`${this.environment.endpoint}/vehicles/${index}`);
  }

  createVehicle(vehicle: IVehicle) {
    return this.http.post(`${this.environment.endpoint}/vehicles`, vehicle);
  }

  editVehicle(vehicle: IVehicle) {
    return this.http.put(`${this.environment.endpoint}/vehicles/${vehicle.index.toString()}`, vehicle);
  }

  removeVehicle(index: number) {
    return this.http.delete(`${this.environment.endpoint}/vehicles/${index}`);
  }
}
