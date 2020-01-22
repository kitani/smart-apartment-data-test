import { ReducerFn } from './models';

export const addReducerKey = (reducers: ReducerFn<any>[], key: string) => {
  return reducers.map(reducer => ({ reducer, key }));
};
