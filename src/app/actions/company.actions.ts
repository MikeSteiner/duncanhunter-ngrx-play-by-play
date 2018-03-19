import { Action } from '@ngrx/store';
import { Company } from '../models/company';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';

export class LoadCompaniesAction implements Action {
  readonly type = LOAD_COMPANIES;

  constructor() { }
}

export class LoadCompaniesSuccessAction implements Action {
  readonly type = LOAD_COMPANIES_SUCCESS;

  public payload: Array<Company>;

  constructor(payload: Array<Company>) {
    this.payload = payload;
  }
}

export type Actions
  = LoadCompaniesAction
  | LoadCompaniesSuccessAction

