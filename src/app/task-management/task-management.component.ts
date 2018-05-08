import { Component, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { ListComponent } from '../reusable_components/list/list.component';
import { TaskManagementFormComponent } from './task-management-form/task-management-form.component';
import { ReusableFunctionsService } from '../service/reusable_functions.service';
import { ListConfig } from '../reusable_components/list/list.model';

const typeObj = {
  1 : "bug",
  2 : "feature",
  3 : "update"
}

@Component({
  selector : 'app-task-management',
  templateUrl : './task-management.component.html'
})
export class TaskManagementComponent {
  @ViewChild(ListComponent) listComponent;
  // List Copmonent config
  dataSource : {}[] = [];
  listConfig : ListConfig = {
    columns : [
      {field : 'id', notToDisplay : true },
      {field : 'component' },
      {field : 'type'},
      {field : 'description'},
      {field : 'status' }
    ],
    sortable : true,
    filterable : true,
    pageable : true,
    serverInteraction : false,
    showLoadingProgress : true,
    showPopupOnDelete : true,
    actions : {
      title : 'Actions',
      edit : true,
      delete : true
    },
    allowAdd : {
      tooltip : "Add task"
    }
  }
  constructor(
    private dialog : MatDialog,
    private http: HttpClient,
    private reusableFunctionsService : ReusableFunctionsService
    ) {
  }

  ngOnInit() {
    // Get task list data
    this.http.get('/api/taskmanagement/list').subscribe((data : {}[])=>{
        this.dataSource = data;
    },err=> this.reusableFunctionsService.checkError(err))
  }

  add(data?) {
    // Open dialog on add and edit event
    const dialogRef = this.dialog.open(TaskManagementFormComponent,{
      disableClose : true,
      autoFocus: true,
      width : '500px',
      data : {
        data,
        title : data ? 'Update task' : 'Add task'
      }
    });
    // On close dialog
    dialogRef.afterClosed().subscribe(
      val => {
        if (this.reusableFunctionsService.isObject(val)) {
          val.type = typeObj[val.typeId];
          val.typeId = +val.typeId;
          // Call api to save task data
          this.http.post('/api/taskmanagement/save',val).subscribe(({message, data}:any)=>{
            // Update datasource
            this.dataSource = data;
            // Show success notification
            this.reusableFunctionsService.showNotification({
                message,
                type : 'success'
            })
          }, err=> this.reusableFunctionsService.checkError(err))
        }
      }
    );
  }
  // On delete of task
  delete({id}) {
    this.http.delete('/api/taskmanagement/delete/'+id).subscribe(({message, data}:any)=>{
      // Update datasource
      this.dataSource = data;
      // Show success notification
      this.reusableFunctionsService.showNotification({
          message,
          type : 'success'
      })
    }, err=> this.reusableFunctionsService.checkError(err))
  }
  // On initialization of list component
  onInitializeList(event) {
    switch (event.eventName) {
      case "add":
        this.add();
        break;
      case "delete":
        this.delete(event.data);
        break;
      case "edit":
        this.add(event.data);
        break;
    }
  }
}
