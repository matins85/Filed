import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHttpMsgService } from './process-http-msg.service';



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHttpMsgService) { }

  POST(data: any) {
    const body = { title: 'Angular POST Request Example' };
    return this.http.post<any>(data, body)
  }


}
