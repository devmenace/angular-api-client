import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobsListComponent} from "./componenets/jobs-list/jobs-list.component";
import {JobCreateComponent} from "./componenets/job-create/job-create.component";

const routes: Routes = [
  {
    path: '',
    component: JobsListComponent
  },
  {
    path: 'create',
    component: JobCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
