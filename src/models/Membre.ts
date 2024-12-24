import { Evt } from './Event';

export interface Membre {
  id: string;
  cin: string;
  name: string;
  cv: string;
  type: string;
  tab_evt: Evt[];
}
