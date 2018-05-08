import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector : 'ng-mat-dialog',
	templateUrl : './ng-mat-dialog.component.html',
	styleUrls : ['./ng-mat-dialog.component.css']
})

export class NgMatDialogComponent {
	config = {
        showCancelIcon : true,
		title : "Delete",
		textContent : "Are you sure you want to delete this record?",
		ok : {text : 'Delete', icon : 'delete'},
		cancel : {text : 'Cancel', icon : 'cancel'}
	}
    constructor(
        private dialogRef: MatDialogRef<NgMatDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data ) {
    	if (data && data.config) {
    		Object.assign(this.config,data.config || {});
    	}
    }
}