import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';
import { StateStoreService } from 'src/app/services/state-store.service';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {

  funds:Fund[];

  constructor(private financialsService:FinancialsService, private stateStore:StateStoreService) {
    stateStore.getSelectedCountry().subscribe(x => {
      this.getData(x);
    });
   }

  ngOnInit(): void {
  }

  getData(countryId:number){
    this.financialsService.getFunds(countryId).subscribe(x => this.funds = x);
  }

}
