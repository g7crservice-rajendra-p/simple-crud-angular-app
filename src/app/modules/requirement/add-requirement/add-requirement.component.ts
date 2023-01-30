import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
@Component({
	selector: 'app-add-requirement',
	templateUrl: './add-requirement.component.html',
	styleUrls: ['./add-requirement.component.scss']
})
export class AddRequirementComponent implements OnInit {
	options = ['Option 1', 'Option 2', 'Option 3'];
	selectedOption = this.options[0];
	addJobFormGroup: FormGroup;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.addJobFormGroup = this.formBuilder.group({
			jobTitle: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			jobDescription: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			selectedOption: new FormControl(this.options[0], [Validators.required]),
			jobCode: new FormControl('jb_001', [Validators.required]),
			isChecked: new FormControl(false, [Validators.required])
		});
	}

	onSubmit() {
		const data = this.addJobFormGroup.value;
		// const response = new Blob(data, { type: 'text/plain;charset=utf-8' });
		// new File([data], 'filename.json', { type: 'text/json;charset=utf-8' });

		console.log(this.addJobFormGroup.value);
	}
}
