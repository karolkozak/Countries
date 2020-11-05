import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Country} from '../../core/models/country';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CountryService} from '../../core/services/country.service';
import {QUERIES} from '../../core/models/query-fields';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  countriesList: Country[];
  queryFields = QUERIES;
  countriesSearchForm: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.countriesList = data.countries;
    });

    this.countriesSearchForm = this.formBuilder.group({
      query: new FormControl(''),
      queryField: new FormControl(this.queryFields[0])
    });
  }

  search(): void {
    const queryValue = this.countriesSearchForm.get('query').value;
    const queryField = this.countriesSearchForm.get('queryField').value;
    this.countryService.splitter(queryField.value, queryValue, queryField.fullText).pipe(
      catchError(e => this.countriesList = [])
    ).subscribe(response => {
      this.countriesList = response;
    });
  }
}
