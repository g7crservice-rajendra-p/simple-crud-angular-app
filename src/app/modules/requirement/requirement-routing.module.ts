import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';

const routes: Routes = [{ path: 'add', component: AddRequirementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequirementRoutingModule { }
