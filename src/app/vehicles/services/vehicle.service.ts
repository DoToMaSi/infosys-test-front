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

  createVehicle(vehicle: IVehicle) {
    return this.http.post(`${this.environment.endpoint}/vehicles`, vehicle);
  }

  editVehicle(vehicle: IVehicle) {
    console.log(vehicle.index);
    return this.http.put(`${this.environment.endpoint}/vehicles/${vehicle.index.toString()}`, vehicle);
  }

  removeVehicle(index: number) {
    return this.http.delete(`${this.environment.endpoint}/vehicles/${index}`);
  }
}