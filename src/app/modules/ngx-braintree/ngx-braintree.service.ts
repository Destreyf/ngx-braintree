import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NgxBraintreeService {

  constructor(private http: HttpClient) { }

  getClientToken(clientTokenURL: string): Observable<string> {
    return this.http
      .get(clientTokenURL, { responseType: 'json' })
      .map((response: any) => {
        return response.token;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  createPurchase(createPurchaseURL: string, nonce: string, chargeAmount: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
    .post(createPurchaseURL, { nonce: nonce, chargeAmount: chargeAmount }, { 'headers': headers })
      .map((response: any) => {
        return response;
      });
  }

}
