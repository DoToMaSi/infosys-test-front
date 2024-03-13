import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
