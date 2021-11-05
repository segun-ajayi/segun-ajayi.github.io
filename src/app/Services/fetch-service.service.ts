import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(environment.api + 'getData');
  }
  sendEmail(values) {
    return this.http.post(environment.api + 'sendEmail', values);
  }
}
