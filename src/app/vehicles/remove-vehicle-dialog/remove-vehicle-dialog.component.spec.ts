import { RouterTestingModule } from '@angular/router/testing';
import { angularImports, declarations, materialImports, providers } from '../vehicles.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveVehicleDialogComponent } from './remove-vehicle-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CAR_MOCK } from '../mocks/vehicles.mock';
import { VehicleService } from '../services/vehicle.service';
import { of } from 'rxjs';

describe('RemoveVehicleDialogComponent', () => {
  let component: RemoveVehicleDialogComponent;
  let fixture: ComponentFixture<RemoveVehicleDialogComponent>;

  const dialogMock = {
    close: () => { }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ...angularImports,
        ...materialImports,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ...declarations
      ],
      providers: [
        ...providers,
        { provide: MAT_DIALOG_DATA, useValue: CAR_MOCK },
        { provide: MatDialogRef, useValue: dialogMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveVehicleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the RemoveVehicleDialogComponent', () => {
    expect(component).toBeDefined();
  });

  describe('VehiclesFormComponentHtml', () => {
    it('should have the "Title"', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('mat-toolbar').querySelector('label').textContent).toBe('Remover Veículo?');
    });

    it('should have the form', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('div').textContent).toBe(`Deseja remover o veículo ${CAR_MOCK.brand} ${CAR_MOCK.model} da placa ${CAR_MOCK.plate}? Essa ação não poderá ser desfeita posteriomente!`);
    });

    it('should have the bottom toolbar', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('button').textContent).toBe('Cancelar');
    });
  });

  describe('VehiclesComponentTs', () => {
    it('should call submitForm', () => {
      const vehicleService = TestBed.inject(VehicleService);
      const spy = spyOn(component, 'removeVehicle').and.callThrough();
      const spyRequest = spyOn(vehicleService, 'removeVehicle').and.returnValue(of({}));

      component.removeVehicle();

      expect(spy).toHaveBeenCalled();
      expect(spyRequest).toHaveBeenCalled();
    });

    it('should call closeModal', () => {
      const spy = spyOn(component, 'closeModal').and.callThrough();
      component.closeModal(false);
      expect(spy).toHaveBeenCalled();
    });
  })
})
