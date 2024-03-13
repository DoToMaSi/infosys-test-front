import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IVehicle } from '../models/vehicle.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-vehicle-form',
    templateUrl: 'vehicle-form.component.html',
    styleUrls: ['./vehicle-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VehiclesFormComponent implements OnInit {

    formVehicle = new FormGroup({
        plate: new FormControl('', [
            Validators.required
        ]),
        brand: new FormControl('', [
            Validators.required
        ]),
        model: new FormControl('', [
            Validators.required
        ]),
        year: new FormControl(null, [
            Validators.required,
            Validators.min(1900),
            Validators.max(2026)
        ]),
        color: new FormControl('', [
            Validators.required
        ]),
        chassis: new FormControl('')
    })

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: IVehicle,
        private dialogRef: MatDialogRef<VehiclesFormComponent>,
        private matSnackbar: MatSnackBar
    ) { }

    ngOnInit() {
        if (this.data) {
            this.formVehicle.setValue(this.data);
        }
    }

    submitForm() {
        this.formVehicle.markAllAsTouched();
        if (this.formVehicle.valid) {
            const vehicle = this.formVehicle.value as IVehicle;
            const successMsg = this.data ? 'Veículo Editado com sucesso' : 'Veículo Cadastrado com Sucesso';
            this.matSnackbar.open(successMsg, 'OK', {
                duration: 2000
            });
            this.dialogRef.close(vehicle);
            return true;
        } else {
            this.matSnackbar.open('O formulário contém dados inválidos ou campos obrigatórios não preenchidos', 'OK', {
                duration: 4000
            });
            return false;
        }
    }

    closeModal(value: any) {
        this.dialogRef.close(value);
    }
}
