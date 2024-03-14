import { RouterTestingModule } from '@angular/router/testing';
import { angularImports, declarations, materialImports, providers } from '../vehicles.module';
import { TestBed } from '@angular/core/testing';
import { RemoveVehicleDialogComponent } from './remove-vehicle-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('RemoveVehicleDialogComponent', () => {
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

  it('should create the RemoveVehicleDialogComponent', () => {
    const fixture = TestBed.createComponent(RemoveVehicleDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
})
