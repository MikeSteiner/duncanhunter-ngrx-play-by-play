import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';

import { CompanyService } from '../company/company.service';
import * as companyActions from './../actions/company.actions';

@Injectable()
export class CompanyEffects {

  constructor(private actions$: Actions,
              private companyService: CompanyService) {
  }

  // tslint:disable-next-line:member-ordering
  @Effect() loadCompanies$ = this.actions$
    .ofType(companyActions.LOAD_COMPANIES)
    .switchMap(() => {
      return this.companyService.loadCompanies()
        .map(companies => new companyActions.LoadCompaniesSuccessAction(companies));
    });
};
