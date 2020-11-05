import {Component, Input} from '@angular/core';
import {Country} from '../../../../core/models/country';
import {MatDialog} from '@angular/material/dialog';
import {CountryDetailsDialogComponent} from '../../modals/country-details-dialog/country-details-dialog.component';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent {
  @Input() countriesList: Country[] = [];

  constructor(public dialog: MatDialog) {
  }

  getCurrencies(country: Country): string {
    return country.currencies.map(currency => currency.name).join(', ');
  }

  openDialog(country: Country): void {
    const dialogRef = this.dialog.open(CountryDetailsDialogComponent, {
      width: '750px',
      data: {country}
    });
  }
}
