import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {forkJoin, Observable, of, throwError} from 'rxjs';
import {Country} from '../models/country';
import {QueryFields} from '../models/query-fields';
import {catchError, map} from 'rxjs/operators';
import {flatten} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.countriesAPI;
  }

  splitter(queryField?: QueryFields, queryValue?: string, fullText?: boolean): Observable<Country[]> {
    const splitValues = queryValue.split(';');
    const observables = [];
    splitValues.forEach(value => observables.push(this.getCountries(queryField, value, fullText)));
    return forkJoin(observables).pipe(
      map((responses: Country[]) => flatten(responses))
    );
  }

  getCountries(queryField?: QueryFields, queryValue?: string, fullText?: boolean): Observable<Country[]> {
    const query = queryField ? `${queryField}/${queryValue}` : 'all';
    let endpoint = `${this.baseUrl}/${query}`;
    if (fullText) {
      endpoint += '?fullText=true';
    }
    return this.httpClient.get<Country[]>(endpoint).pipe(
      map(response => {
        return Array.isArray(response)
          ? response
          : [response];
      }),
      catchError(e => {
        return e.status === 404
          ? of([])
          : throwError(e);
      })
    );
  }
}
