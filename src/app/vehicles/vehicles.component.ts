import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { VehiclesFormComponent } from './vehicle-form/vehicle-form.component';
import { IVehicle } from './models/vehicle.model';
import { RemoveVehicleDialogComponent } from './remove-vehicle-dialog/remove-vehicle-dialog.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VehiclesComponent {

  @ViewChild('vehicleTable') vehicleTable: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnsToDisplay = ['actions', 'plate', 'brand', 'model', 'year', 'color', 'chassis'];
  columnsName = ['Ações', 'Placa', 'Marca', 'Modelo', 'Ano', 'Color', 'Nº Chassi'];
  dataSource = new MatTableDataSource<IVehicle>([]);

  constructor(private matDialog: MatDialog) { }

  createVehicle() {
    const dialog = this.matDialog.open(VehiclesFormComponent, {
      maxWidth: '90vw',
      width: '800px',
      maxHeight: '90vh',
      disableClose: true,
      autoFocus: false,
    });

    dialog.afterClosed().subscribe((value: IVehicle | null) => {
      if (value) {
        this.dataSource.data.push(value);
        this.vehicleTable.renderRows();
      }
    });
  }

  editVehicle(vehicle: IVehicle, index: number) {
    const dialog = this.matDialog.open(VehiclesFormComponent, {
      maxWidth: '90vw',
      width: '800px',
      maxHeight: '90vh',
      data: vehicle
    });

    dialog.afterClosed().subscribe((value: IVehicle | null) => {
      if (value) {
        this.dataSource.data[index] = value;
        this.vehicleTable.renderRows();
      }
    });
  }

  removeVehicle(vehicle: IVehicle, index: number) {
    const dialog = this.matDialog.open(RemoveVehicleDialogComponent, {
      maxWidth: '90vw',
      width: '600px',
      maxHeight: '90vh',
      data: vehicle
    });

    dialog.afterClosed().subscribe((value: boolean) => {
      if (value) {
        this.dataSource.data.splice(index, 1);
        this.vehicleTable.renderRows();
      }
    });
  }
}
