import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsDialogComponent } from './country-details-dialog.component';

describe('CountryDetailsDialogComponent', () => {
  let component: CountryDetailsDialogComponent;
  let fixture: ComponentFixture<CountryDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
