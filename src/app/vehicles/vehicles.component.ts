import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VehiclesFormComponent } from './vehicle-form/vehicle-form.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VehiclesComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnsToDisplay = ['plate', 'brand', 'model', 'year', 'color'];
  columnsName = ['Placa', 'Marca', 'Modelo', 'Ano', 'Color'];
  dataSource = new MatTableDataSource([]);

  constructor(private matDialog: MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  createVehicle() {
    const dialog = this.matDialog.open(VehiclesFormComponent, {
      maxWidth: '90vw',
      width: '800px'
    });

    dialog.afterClosed().subscribe((value) => {
      console.log(value);
    });
  }

  editVehicle() { }

  removeVehicle() { }
}
