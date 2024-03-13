import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IVehicle } from '../models/vehicle.model';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private matSnackbar: MatSnackBar
  ) { }

  closeModal(remove = false) {
    if (remove) {
      this.matSnackbar.open('Veículo Removido com Sucesso', 'OK', {
        duration: 2000
      });
    }

    this.dialogRef.close(remove);
  }
}
