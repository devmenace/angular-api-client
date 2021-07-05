import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobsListComponent} from "./componenets/jobs-list/jobs-list.component";
import {JobCreateComponent} from "./componenets/job-create/job-create.component";
import {JobUpdateComponent} from "./componenets/job-update/job-update.component";

const routes: Routes = [
  {
    path: '',
    component: JobsListComponent
  },
  {
    path: 'create',
    component: JobCreateComponent
  },
  {
    path: 'update',
    component: JobUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JobsRoutingModule { }
