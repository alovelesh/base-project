import { Component, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'app-main-section',
	templateUrl: './main-section-component.html',
	styleUrls: ['./main-section-component.css']
})
export class MainSection{
	
	/*constructor(
		private matDialogRef : MatDialogRef<MainSection>,
		@Inject(MAT_DIALOG_DATA) private data : any) {
		// code...
	}
	@HostListener('window:keyup.esc') onKeyUp() {
		console.log("data",this.data)
		this.matDialogRef.close(this.data);
	}*/
}
