import {
  Component, ViewChild, Input, Output, OnInit,
  AfterViewInit, ElementRef, EventEmitter
} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog} from '@angular/material';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';

import { NgMatDialogComponent } from '../angular-material-dialog/ng-mat-dialog.component';
import { ListConfig } from './list.model';

@Component({
  selector : "app-list",
  templateUrl : './list.component.html',
  styleUrls : ['./list.component.css']
})

export class ListComponent implements OnInit, AfterViewInit {
  // Column which are displayed in list
  displayedColumns : Array<string> = [];
  // List datasource
  dataSource = new MatTableDataSource();
  // Set loading div false
  loading : boolean = false;
  // Bind searchInput, MatSort, MatPaginator
  @ViewChild('searchInput') searchInput : ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // Get Property and event fromparent
  @Input() config : ListConfig;
  @Input('dataSource') ds = [];
  @Input() totalCount;
  @Output() initialized = new EventEmitter();  
  @Output() onSelect = new EventEmitter();

  constructor(
    private dialog : MatDialog
        ){} 
  
  // For filter for static data
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnChanges() {
    // After updating input hide loading division
    this.loading = false;
    // If server interaction(Means Searching, Sorting, Pagination applied on server end)
    //  is true and footer is also available then push footer into dataSource
    this.config.serverInteraction && this.config.footer && this.ds.push(Object.assign(this.config.footer.row,{isFooterRow : true}));
    // Convert input datasorce into Mat table data source
    this.dataSource = new MatTableDataSource(this.ds);
    // If server interaction is false then bind Mat sorting and pagination with datasource
    if(!this.config.serverInteraction) {
      // If paginator is true and no record exist in current pageindex then decrese the pageindex
      if (this.paginator && this.dataSource.data.length <= this.paginator.pageIndex * this.paginator.pageSize && this.paginator.pageIndex)
        this.paginator.pageIndex-=1;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    if(this.config.serverInteraction) {
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        this.config.filterable && fromEvent(this.searchInput.nativeElement,'input')
            .pipe(
                debounceTime(250),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.passFilterToParent();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.passFilterToParent())
        )
        .subscribe();
    } else {
      // If server interaction is false then bind Mat sorting and pagination with datasource
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    // Call callback with 'initialized' event name
    this.initialized.next({eventName : 'initialized'});
  }
  // Pass filter object to parent
  private passFilterToParent() {
    let obj : any = {};
    // If pageable is true set offset and limit
    if (this.config.pageable) {
      obj.offset = this.paginator.pageIndex*this.paginator.pageSize;
      obj.limit = this.paginator.pageSize;
    }
    // If filterable is true set searchValue
    this.config.filterable && (obj.searchValue = this.searchInput.nativeElement.value.trim());
    // If sortable is true set sort object
    this.config.sortable && this.sort.active && (obj.sort = { field : this.sort.active, dir : this.sort.direction});
    // Call callback and pass data with 'filterUpdate' event name
    this.initialized.next({
      eventName : 'filterUpdate',
      data : obj
    });
    this.loading = true;
  }

  ngOnInit() {
    this.displayedColumns = [];
    // Collect display column from config.columns in which notToDisplay flag is false
    for(let ob of this.config.columns)
      ob.notToDisplay || this.displayedColumns.push(ob.field);
    // Check if config.actions is defined then push action column too.
    this.isObject(this.config.actions) && this.displayedColumns.push("action");
  }
  // Call on delete
  onDelete(row) {
    // config.showPopupOnDelete is true open confirmation popup
    if (this.config.showPopupOnDelete) {
      const dialogRef = this.dialog.open(NgMatDialogComponent,{
        disableClose : true,
        autoFocus: true,
        data: {
          config : this.isObject(this.config.showPopupOnDelete) && this.config.showPopupOnDelete
        }
      });
      dialogRef.afterClosed().subscribe(
        val => this.isObject(val) && val.ok && this.initialized.next({eventName : 'delete', data : row})
        );
    }
    // If config.showPopupOnDelete is false then
    // Call callback and pass data with 'delete' event name
    else 
      this.initialized.next({eventName : 'delete', data : row});
  }
  // If parent want to update grid with update datasource forcefully
  onDataSourceUpdate = () => this.ngOnChanges();

  isObject = value => value !== null && typeof value === 'object';
}