import { IPerspective } from "./perspective.interface";

export interface IObjective {
  id: number;
  code: string;
  name: string;
  description: string;
  perspective: IPerspective;
}
