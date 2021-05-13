import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store';
import { User } from './../models/storeUser'


export enum ExampleActionTypes {
    GetUser = '[User API] Get User',
  }


  export enum ExampleActionTypes2 {
    GetUser = '[User API] Remove User',
  }


// User


// Section 2
export const ADD_USER  = '[USER] Add'
export const REMOVE_USER   = '[USER] Remove'

// Section 3
export class AddUser implements Action {
    public readonly type = ExampleActionTypes.GetUser

    constructor(public Userpayload: User[]) {}

}

export class RemoveUser implements Action {
    public readonly type = ExampleActionTypes2.GetUser

    constructor(public Userpayload: any) {}
}


// Section 4
export type UserActions = | AddUser | RemoveUser


export type Actions = | AddUser | RemoveUser