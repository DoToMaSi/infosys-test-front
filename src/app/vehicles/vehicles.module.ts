import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { VehiclesFormComponent } from './vehicle-form/vehicle-form.component';

const routes: Routes = [
  { path: '', component: VehiclesComponent }
]

const angularImports = [
  CommonModule,
  RouterModule.forChild(routes)
];

const materialImports = [
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatDialogModule
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
