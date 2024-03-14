import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { VehiclesComponent } from './vehicles.component';
import { VehiclesFormComponent } from './vehicle-form/vehicle-form.component';
import { RemoveVehicleDialogComponent } from './remove-vehicle-dialog/remove-vehicle-dialog.component';
import { VehicleService } from './services/vehicle.service';

const routes: Routes = [
  { path: '', component: VehiclesComponent }
]

export const declarations = [
  VehiclesComponent,
  VehiclesFormComponent,
  RemoveVehicleDialogComponent
];

export const providers = [
  VehicleService
];

export const angularImports = [
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule
];

export const materialImports = [
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...angularImports,
    ...materialImports,
    RouterModule.forChild(routes)
  ],
  providers: [
    ...providers
  ]
})

export class VehiclesModule { }
