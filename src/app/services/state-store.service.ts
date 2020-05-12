import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateStoreService {

    private unselectedValue:number = -1;
    private selectedCountrySubj = new BehaviorSubject<number>(this.unselectedValue);
    
    /** When components subscribe to the selected value it can be observable */
    getSelectedCountry(): Observable<number> {
      return this.selectedCountrySubj.asObservable();
    }
    
    setSelectedCountry(selectedValue:number) {
      this.selectedCountrySubj.next(selectedValue);
    }

    constructor() { }
}
