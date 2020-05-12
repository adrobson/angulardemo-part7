import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';
import { StateStoreService } from 'src/app/services/state-store.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countrys:Country[];
  SelectedCountryId:number;

  constructor(private financialsService:FinancialsService, private stateStore:StateStoreService) {
    
  }

  ngOnInit(): void {
    this.financialsService.getCountrys().subscribe(x => {
      this.countrys = x;
      });
  }

  onChange(){
    this.stateStore.setSelectedCountry(this.SelectedCountryId);   
  }
}
