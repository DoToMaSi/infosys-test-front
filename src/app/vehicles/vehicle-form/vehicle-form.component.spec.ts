import { TestBed } from '@angular/core/testing';
import { angularImports, declarations, materialImports, providers } from '../vehicles.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VehiclesFormComponent } from './vehicle-form.component';

describe('VehiclesFormComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ...angularImports,
      ...materialImports,
      RouterTestingModule
    ],
    declarations: [
      ...declarations
    ],
    providers: [
      ...providers,
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }
    ]
  }));

  it('should create the VehiclesFormComponent', () => {
    const fixture = TestBed.createComponent(VehiclesFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
})
