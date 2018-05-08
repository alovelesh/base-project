import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { ReusableFunctionsService } from '../../../service/reusable_functions.service';

import { ListConfig } from '../../../reusable_components/list/list.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
    private http: HttpClient,
    private reusableFunctionsService : ReusableFunctionsService
    ) { }
  
  totalCount = 50;
  dataSource : {}[] = [];
  listConfig : ListConfig = {
    // columns : [
    //   {field : 'id', notToDisplay : true },
    //   {field : 'component' },
    //   {field : 'type'},
    //   {field : 'description'},
    //   {field : 'status' }
    // ],
    columns : [
      {field : "id" },
      {field : "Atomic Weight" },
      {field : "Name" },
      {field : "Sym." },
      {field : "M.P. (°C)" },
      {field : "B.P. (°C)" },
      {field : "Density (g/cm3)" },
      {field : "Earth crust (%)" },
      {field : "Discovery (Year)" },
      {field : "Group" },
      {field : "Electron configuration" },
      {field : "Ionization energy (eV)" },
    ],
    sortable : true,
    selectable : true,
    filterable : true,
    pageable : {
      // pageSize : 5,
      // pageSizeOptions : [5,10,20],
      // showFirstLastButtons : true
    },
    serverInteraction : true,
    footer : {
      row : {
          "id": "1",
          "Atomic Weight": "0.000",
          "Name": "XXXXXXXX",
          "Sym.": "X",
          "M.P. (°C)": "-000",
          "B.P. (°C)": "-000",
          "Density (g/cm3)": "0.00",
          "Earth crust (%)": "0.00",
          "Discovery (Year)": "0000",
          "Group": "0",
          "Electron configuration": "0x0",
          "Ionization energy (eV)": "00.00"
      }
    },
    showLoadingProgress : true,
    showPopupOnDelete : true,
    actions : {
      title : 'Actions',
      edit : {
        //isDisable : true
      },
      delete : {
        //isDisable : true,
      },
    },
    allowAdd : {
      //tooltip : "Add Record",
      //tooltipPosition : 'below',
      //isDisable : true,
    }
  }

  onInitializeList(event) {
    switch (event.eventName) {
      case "initialized":
        break;
      case "filterUpdate": {
        const queryParams = event.data;
          //this.http.get('/assets/others/bug-feature-update.json').subscribe((data : any)=>{
          this.http.get('/assets/others/periodic-table.json').subscribe((data : any)=>{
                if (queryParams.searchValue)
                   data = data.filter(obj => {
                     /*return obj.component.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                     obj.description.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                     obj.type.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                     obj.status.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0;*/
                     return obj.Name.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0;
                   });

                if(queryParams.sort && queryParams.sort.dir)
                  data = this.reusableFunctionsService.sortArray(data, queryParams.sort.field, queryParams.sort.dir);

                setTimeout(() => {
                  this.totalCount = data.length;
                  queryParams.limit && (this.dataSource = data.slice(queryParams.offset,queryParams.offset+queryParams.limit));
                },1000);
            },(err)=>{
                console.log({status:'KO', data : err});
            })
        break;      
      }
    }
  }
  onSelect(row) {
    console.log('onSelect',row);
  }
  ngOnInit() {
    //this.http.get('/assets/others/bug-feature-update.json').subscribe((data : {}[])=>{
    this.http.get('/assets/others/periodic-table.json').subscribe((data : {}[])=>{
        this.dataSource = this.listConfig.serverInteraction ? data.slice(0,10) : data;
        this.totalCount = data.length;
        //this.listConfig.isFooterRequired.footer.id = 10000;
    },(err)=>{
        console.log({status:'KO', data : err});
    })
  }
}