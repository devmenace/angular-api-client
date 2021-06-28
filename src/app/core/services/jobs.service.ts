import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../models/job";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get$(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(environment.apiUrl + 'jobs');
  }

  public create$(job: Job): Observable<number> {
    return this.httpClient.post<number>(environment.apiUrl + 'jobs', job);
  }
}
