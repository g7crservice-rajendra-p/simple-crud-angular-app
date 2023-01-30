import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { RequirementRoutingModule } from './requirement-routing.module';


@NgModule({
  declarations: [
    AddRequirementComponent
  ],
  imports: [
    RequirementRoutingModule
  ]
})
export class RequirementModule { }
