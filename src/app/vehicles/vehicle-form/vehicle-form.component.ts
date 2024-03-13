import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: 'vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VehiclesFormComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<VehiclesFormComponent>,
  ) { }


}
