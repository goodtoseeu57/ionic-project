import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  url = 'http://dummy.restapiexample.com/api/v1/employees';

  getEmployess(): Observable<Employee[]> {
   return  this.http.get<Employee[]>(this.url);

  }

}
