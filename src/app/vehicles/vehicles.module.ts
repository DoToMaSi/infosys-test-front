import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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


const routes: Routes = [
  { path: '', component: VehiclesComponent }
]

const angularImports = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes)
];

const materialImports = [
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
    VehiclesComponent,
    VehiclesFormComponent
  ],
  imports: [
    ...angularImports,
    ...materialImports,
    RouterModule.forChild(routes)
  ]
})

export class VehiclesModule { }
