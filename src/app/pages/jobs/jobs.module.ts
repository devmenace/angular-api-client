import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsListComponent} from './componenets/jobs-list/jobs-list.component';
import {JobCreateComponent} from './componenets/job-create/job-create.component';
import {JobsRoutingModule} from "./jobs-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    JobsListComponent,
    JobCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JobsRoutingModule
  ]
})
export class JobsModule {
}
