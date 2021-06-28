import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get$(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'properties')
  }
}
