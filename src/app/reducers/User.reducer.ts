import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './../models/storeUser'
import * as KonpayActions from './../actions/User.action';

import { Actions } from './../actions/User.action';

import { createEntityAdapter, EntityState } from '@ngrx/entity';



interface UserState extends EntityState<User> {
    total: number;
  }
  
  export interface State {
    // msg: string;
    user: UserState;
  }


  const adapterUser = createEntityAdapter<User>();
  
  const UserInitialState: UserState = adapterUser.getInitialState({ total: 0 });


  const initialState = {
    // msg: 'Multiple entities in the same state',
    user: UserInitialState,
  }

  export function reducer(state: State = initialState, action: Actions): State {
    
    switch (action.type) {
      
      case KonpayActions.ExampleActionTypes.GetUser:
        return { ...state, user: adapterUser.addMany(action.Userpayload, state.user) };
      
      case KonpayActions.ExampleActionTypes2.GetUser: 
        return { ...state, user: adapterUser.removeOne(1, state.user) };
      
      default:
        return state;
    }
  
  }


export const selectUserState = (state: State) => state.user;


export const { selectAll: selectAllUser } = adapterUser.getSelectors();

