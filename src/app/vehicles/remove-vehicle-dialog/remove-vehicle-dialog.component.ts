import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IVehicle } from '../models/vehicle.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleService } from '../services/vehicle.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-remove-vehicle-dialog',
  templateUrl: 'remove-vehicle-dialog.component.html',
  styleUrls: ['./remove-vehicle-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RemoveVehicleDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IVehicle,
    private dialogRef: MatDialogRef<RemoveVehicleDialogComponent>,
    private matSnackbar: MatSnackBar,
    private vehicleService: VehicleService
  ) { }

  removeVehicle() {
    this.vehicleService.removeVehicle(this.data.index).pipe(take(1))
      .subscribe({
        next: () => {
          this.matSnackbar.open('Veículo Removido com Sucesso', 'OK', {
            duration: 2000
          });

          this.closeModal(true);
        },
        error: (error) => {
          console.error(error);
          this.matSnackbar.open('ERRO: Erro ao remover os dados do veículo', 'OK', {
            duration: 2000
          });
        }
      })
  }

  closeModal(remove = false) {
    this.dialogRef.close(remove);
  }
}
