import { Company } from '../models/company';
import * as fromCompanies from './../actions/company.actions';

export interface State {
  companies: Array<Company>
};

const initialState: State = {
  companies: []
};

export function companyReducer(state: State = initialState, action: fromCompanies.Actions): State {
  switch (action.type) {
    case fromCompanies.LOAD_COMPANIES_SUCCESS: {
      return state = {
        companies: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
