import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import { AppState } from '../../models/appState';
import * as companyActions from '../../actions/company.actions'
import { Company } from '../../models/company';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  private companies: Observable<Array<Company>>;

  constructor(private store: Store<AppState>) {
    this.companies = Observable.from([]);
  }

  ngOnInit() {
    this.loadCompanies();
    this.companies = this.store.select(state => state.companies.companies);
  }

  private loadCompanies(): void {
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

}
