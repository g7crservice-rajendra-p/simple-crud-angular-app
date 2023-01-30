import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { RequirementRoutingModule } from './requirement-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
	IgxAvatarModule,
	IgxButtonModule,
	IgxDialogModule,
	IgxDropDownModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxRippleModule,
	IgxToggleModule
} from 'igniteui-angular';

@NgModule({
	declarations: [AddRequirementComponent],
	imports: [
		CommonModule,
		RequirementRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSelectModule,
		MatCheckboxModule,
		IgxAvatarModule,
		IgxButtonModule,
		IgxDialogModule,
		IgxDropDownModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxRippleModule,
		IgxToggleModule
	]
})
export class RequirementModule {}
