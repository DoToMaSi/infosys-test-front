import { ComponentFixture, TestBed } from '@angular/core/testing';
import { angularImports, declarations, materialImports, providers } from './vehicles.module';
import { RouterTestingModule } from '@angular/router/testing';
import { VehiclesComponent } from './vehicles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleService } from './services/vehicle.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { VehiclesFormComponent } from './vehicle-form/vehicle-form.component';
import { CARS } from './mocks/vehicles.mock';
import { FormControl } from '@angular/forms';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

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
        ...providers
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the VehiclesComponent', () => {
    expect(component).toBeDefined();
  });

  describe('VehiclesComponentHtml', () => {
    it('should have the "Title"', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('mat-toolbar').querySelector('label').textContent).toBe('Veículos');
    });

    it('should have the "Add Vehicle" button', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('button').querySelector('label').textContent).toBe('Cadastrar Veículo');
    });

    it('should have a search input', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('mat-form-field').querySelector('mat-label').textContent?.trim()).toBe('Pesquisar...');
    });

    it('should have a table', () => {
      const element = fixture.nativeElement;
      expect(element.querySelector('mat-table')).toBeDefined();
    });
  })

  describe('VehiclesComponentTs', () => {
    it('should call ngAfterViewInit', () => {
      const spy = spyOn(component, 'ngAfterViewInit').and.callThrough();
      component.ngAfterViewInit();
      expect(spy).toHaveBeenCalled();
    });

    it('should call ngOnDestroy', () => {
      const spy = spyOn(component, 'ngOnDestroy').and.callThrough();
      component.ngOnDestroy();
      expect(spy).toHaveBeenCalled();
    });

    it('should call getVehicles', () => {
      const vehicleService = TestBed.inject(VehicleService);
      const spy = spyOn(component, 'getVehicles').and.callThrough();
      const spyVehicles = spyOn(vehicleService, 'getVehicles').and.callThrough();
      component.getVehicles();
      expect(spy).toHaveBeenCalled();
      expect(spyVehicles).toHaveBeenCalled();
    });

    it('should call createVehicle', () => {
      const spy = spyOn(component, 'createVehicle').and.callThrough();
      component.createVehicle();
      expect(spy).toHaveBeenCalled();
    });

    it('should call editVehicle', () => {
      const spy = spyOn(component, 'editVehicle').and.callThrough();
      const carMock = CARS[0];

      component.editVehicle(carMock, 0);
      expect(spy).toHaveBeenCalled();
    });

    it('should call editVehicle', () => {
      const spy = spyOn(component, 'removeVehicle').and.callThrough();
      const carMock = CARS[0];

      component.removeVehicle(carMock, 0);
      expect(spy).toHaveBeenCalled();
    });
  })
})
