import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CountryService} from '../services/country.service';
import {Observable} from 'rxjs';
import {Country} from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesResolverService implements Resolve<Country[]> {

  constructor(private countryService: CountryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country[]> {
    return this.countryService.getCountries();
  }
}
