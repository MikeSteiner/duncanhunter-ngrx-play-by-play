import { Company } from './company';

export interface AppState {
  companies: {
    companies: Array<Company>;
  }
}
