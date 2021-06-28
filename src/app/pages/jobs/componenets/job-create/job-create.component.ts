import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {JobStatus} from "../../../../core/models/job-status";
import {JobsService} from "../../../../core/services/jobs.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {PropertyService} from "../../../../core/services/property.service";
import {Propertie} from "../../../../core/models/propertie";

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public properties$: Observable<Propertie[]> = this.propertieService.get$();
  jobForm: FormGroup = new FormGroup({
    ['summary']: new FormControl(''),
    ['description']: new FormControl(''),
    ['status']: new FormControl(JobStatus.open),
    ['property_id']: new FormControl()
  });

  constructor(
    private jobsService: JobsService,
    private propertieService: PropertyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.subscription.add(
      this.jobsService.create$(this.jobForm.value)
        .subscribe(
          value => {
            this.router.navigate(['/']).catch(e => console.error('router navigation error: ', e));
          },
          error => {
            console.error('Job creation failed: ', error);
          }
        )

    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
