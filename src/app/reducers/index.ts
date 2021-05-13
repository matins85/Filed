import {ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExample from './../reducers/User.reducer';


export interface AppState {
    example: fromExample.State;
}
  
export const reducers: ActionReducerMap<AppState, any> = {  
example: fromExample.reducer
};
  
  // Example selectors
  export const selectExampleModule = createFeatureSelector<fromExample.State>('example');
  
  export const selectUserState = createSelector(selectExampleModule, fromExample.selectUserState);
  
  export const selectAllUser = createSelector(selectUserState, fromExample.selectAllUser);
  
  