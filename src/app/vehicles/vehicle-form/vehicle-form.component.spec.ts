import { ComponentFixture, TestBed } from '@angular/core/testing';
import { angularImports, declarations, materialImports, providers } from '../vehicles.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VehiclesFormComponent } from './vehicle-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CARS } from '../mocks/vehicles.mock';
import { VehicleService } from '../services/vehicle.service';
import { of } from 'rxjs';

describe('VehiclesFormComponent', () => {
  let component: VehiclesFormComponent;
  let fixture: ComponentFixture<VehiclesFormComponent>;

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
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the VehiclesFormComponent', () => {
    expect(component).toBeDefined();
  });

  describe('VehiclesFormComponentHtml', () => {
    it('should have the "Title"', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('mat-toolbar').querySelector('label').textContent).toBe('Editar Veículo');
    });

    it('should have the form', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('form')).toBeDefined();
    });

    it('should have the bottom toolbar', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('button').textContent).toBe('Cancelar');
    });
  });

  describe('VehiclesComponentTs', () => {
    it('should call ngOnInit', () => {
      const spy = spyOn(component, 'ngOnInit').and.callThrough();
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    it('should call submitForm', () => {
      const spy = spyOn(component, 'submitForm').and.callThrough();
      component.submitForm();
      expect(spy).toHaveBeenCalled();
    });

    it('should call submitForm with a an empty data', () => {
      const vehicleService = TestBed.inject(VehicleService);
      const spy = spyOn(component, 'submitForm').and.callThrough();
      const spyRequest = spyOn(vehicleService, 'createVehicle').and.returnValue(of(CARS[0]));

      component.data = null;
      component.formVehicle.patchValue(CARS[0]);
      component.submitForm();

      expect(spy).toHaveBeenCalled();
      expect(spyRequest).toHaveBeenCalled();
    });

    it('should call submitForm with a different data', () => {
      const vehicleService = TestBed.inject(VehicleService);
      const spy = spyOn(component, 'submitForm').and.callThrough();
      const spyRequest = spyOn(vehicleService, 'editVehicle').and.returnValue(of(CARS[0]));

      component.data = CARS[0];
      component.formVehicle.patchValue(CARS[0]);
      component.submitForm();

      expect(spy).toHaveBeenCalled();
      expect(spyRequest).toHaveBeenCalled();
    });

    it('should call closeModal', () => {
      const spy = spyOn(component, 'closeModal').and.callThrough();
      component.closeModal(null);
      expect(spy).toHaveBeenCalled();
    });
  });
})
