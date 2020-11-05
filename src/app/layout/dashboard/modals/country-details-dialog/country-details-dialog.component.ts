import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Country} from '../../../../core/models/country';
import * as moment from 'moment';

export interface DialogData {
  country: Country;
}

@Component({
  selector: 'app-country-details-dialog',
  templateUrl: './country-details-dialog.component.html',
  styleUrls: ['./country-details-dialog.component.scss']
})
export class CountryDetailsDialogComponent {
  times: string[];

  constructor(public dialogRef: MatDialogRef<CountryDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  time(timezone: string): string {
    return moment().utcOffset(timezone).format('HH:mm:ss');
  }
}
