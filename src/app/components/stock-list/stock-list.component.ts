import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';
import { StateStoreService } from 'src/app/services/state-store.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stocks:Stock[];

  constructor(private financialsService:FinancialsService, private stateStore:StateStoreService) {
    this.stateStore.getSelectedCountry().subscribe(x => {
      this.getData(x);
    });
   }

  ngOnInit(): void {

  }

  getData(countryId:number){
    this.financialsService.getStocks(countryId).subscribe(x => this.stocks = x);
  }
}
