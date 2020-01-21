export interface Action {
  type: string;
  payload?: any;
}

export interface Effect {
  (action: Action): Action | Action[];
}
