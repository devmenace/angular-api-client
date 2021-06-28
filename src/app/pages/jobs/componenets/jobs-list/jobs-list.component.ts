import { Component, OnInit } from '@angular/core';
import {JobsService} from "../../../../core/services/jobs.service";
import {Observable} from "rxjs";
import {Job} from "../../../../core/models/job";

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  public jobs$: Observable<Job[]> = this.jobsService.get$();

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
  }

}
