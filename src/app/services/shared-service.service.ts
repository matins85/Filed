import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  goBack?: string;
  sharedData: any;

  constructor() { }

  setMessage(data: string) {
    this.goBack = data
  }
  
  getMessage() {
    return this.goBack
  }


  setMessage2(data: any) {
    this.sharedData = data
  }
  
  getMessage2() {
    return this.sharedData
  }

}
