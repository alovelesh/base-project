import { Component, ViewChild, AfterViewInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import CONFIG  from './task-management-form.config';

import { DynamicFormComponent } from '../../reusable_modules/dynamic-form/containers/dynamic-form/dynamic-form.component';


@Component({
	selector : 'app-task-management-form',
	templateUrl : './task-management-form.component.html'
})

export class TaskManagementFormComponent implements AfterViewInit {
	@ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  data = {
    component: "",
    description: "",
    typeId: "",
    status: ""
  };
  config = CONFIG;
  title : string = '';

  constructor(private dialogRef: MatDialogRef<TaskManagementFormComponent>,
        @Inject(MAT_DIALOG_DATA) {data, title},
        private cdr : ChangeDetectorRef) {
    data && Object.assign(this.data,data);
    this.title = title;
  }

  ngAfterViewInit() {
      this.form.patchValue(this.data);
      this.cdr.detectChanges();
  }
  
  submit = (val) => this.dialogRef.close(Object.assign(this.data,val));
}