import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {CountriesListComponent} from './dashboard/components/countries-list/countries-list.component';
import {MatSelectModule} from '@angular/material/select';
import {AgmCoreModule} from '@agm/core';
import {MatDialogModule} from '@angular/material/dialog';
import {CountryDetailsDialogComponent} from './dashboard/modals/country-details-dialog/country-details-dialog.component';
// import {} from 'googlemaps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  declarations: [HeaderComponent, DashboardComponent, CountriesListComponent, CountryDetailsDialogComponent],
  exports: [
    HeaderComponent,
    DashboardComponent
  ]
})
export class LayoutModule {
}
