import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { VehiclesFormComponent } from './vehicle-form/vehicle-form.component';
import { IVehicle } from './models/vehicle.model';
import { RemoveVehicleDialogComponent } from './remove-vehicle-dialog/remove-vehicle-dialog.component';
import { VehicleService } from './services/vehicle.service';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VehiclesComponent implements AfterViewInit, OnDestroy {

  @ViewChild('vehicleTable') vehicleTable: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnsToDisplay = ['actions', 'plate', 'brand', 'model', 'year', 'chassis', 'renavam', 'createdOn', 'lastUpdated'];
  columnsName = ['Ações', 'Placa', 'Marca', 'Modelo', 'Ano', 'Nº Chassi', 'RENAVAM', 'Criado em', 'Ultima Atualização'];
  dataSource = new MatTableDataSource<IVehicle>([]);

  search = new FormControl('')

  request$ = new Subject();

  constructor(
    public matDialog: MatDialog,
    private vehicleService: VehicleService
  ) { }

  ngAfterViewInit(): void {
    this.getVehicles();
    this.search.valueChanges
      .pipe(distinctUntilChanged(), takeUntil(this.request$), debounceTime(600))
      .subscribe((val) => {
        this.dataSource.filter = val;
      })
  }

  ngOnDestroy() {
    this.request$.next(true);
    this.request$.complete();
  }

  getVehicles() {
    this.vehicleService.getVehicles().pipe(takeUntil(this.request$))
      .subscribe((value) => {
        this.dataSource.data = value;
        this.vehicleTable.renderRows();
      })
  }

  createVehicle() {
    this.matDialog.open(VehiclesFormComponent, {
      maxWidth: '90vw',
      width: '800px',
      maxHeight: '90vh',
      disableClose: true,
      autoFocus: false,
    }).afterClosed().subscribe((value: IVehicle | null) => {
      if (value) {
        this.getVehicles();
        this.vehicleTable.renderRows();
      }
    });
  }

  editVehicle(vehicle: IVehicle, index: number) {
    vehicle.index = index;
    const dialog = this.matDialog.open(VehiclesFormComponent, {
      maxWidth: '90vw',
      width: '800px',
      maxHeight: '90vh',
      data: vehicle
    });

    dialog.afterClosed().subscribe((value: IVehicle | null) => {
      if (value) {
        this.getVehicles();
        this.vehicleTable.renderRows();
      }
    });
  }

  removeVehicle(vehicle: IVehicle, index: number) {
    vehicle.index = index;
    const dialog = this.matDialog.open(RemoveVehicleDialogComponent, {
      maxWidth: '90vw',
      width: '600px',
      maxHeight: '90vh',
      data: vehicle
    });

    dialog.afterClosed().subscribe((value: boolean) => {
      if (value) {
        this.getVehicles();
        this.vehicleTable.renderRows();
      }
    });
  }
}
