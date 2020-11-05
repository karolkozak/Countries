import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {CoreModule} from './core/core.module';
import {CountriesResolverService} from './core/resolvers/countries-resolver.service';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent, resolve: {countries: CountriesResolverService}}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
