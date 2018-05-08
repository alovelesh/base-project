import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

const snackBarDefaultConfig = {
    message : "xxxxxxxxxxxx",
    action : "close",
    duration : 2000,
    type : 'success'
};
@Injectable()
export class ReusableFunctionsService {
    constructor(
        private snackBar : MatSnackBar,
        private router : Router,
        ){}
	// Convert Linear to Multi Level
	getNestedChildren(arr, primKey, ParKey, parent? : any) {
        var out = [];
        for(var i in arr) {
            if(arr[i][ParKey] == parent) {
                var children = this.getNestedChildren(arr, primKey, ParKey, arr[i][primKey]);
                children.length && (arr[i].children = children);
                out.push(arr[i])
            }
        }
        return out;
    }
    // Sort Array on behalf of field name
    sortArray(array : {}[], field : string, sortingType : string, fieldType ?: string) {
        var dir = 1;
        if (!array.length)
            return array;
        (sortingType == 'desc') && (dir = -1);
        switch (fieldType) {
            case "number":
                array.sort((a, b)=>{
                    return (a[field] - b[field])*dir;
                });
                break;
            case "date": {
                let x,y;
                array.sort((a,b)=>{
                    x = new Date(a[field]).getTime();
                    y = new Date(b[field]).getTime();
                    return ((x < y) ? -1 : ((y < x) ? 1 : 0)) * dir;
                })
                break;
            }
            default: {
                let x,y;
                array.sort((a,b)=>{
                    x = a[field].toLowerCase();
                    y = b[field].toLowerCase();
                    return ((x < y) ? -1 : ((y < x) ? 1 : 0)) * dir;
                })
                break;
            }
        }
        return array;
    }
    // Show notifications
    showNotification = (obj:{} = {}) => {
        var config = Object.assign({}, snackBarDefaultConfig, obj);
        this.snackBar.open(config.message, config.action,{
          duration: config.duration,
          extraClasses : [config.type]
        });
    }
    // Check object
    isObject = value => value !== null && typeof value === 'object';
    // Check Server response error
    checkError = (err) => {
        // If server response is 401(unauthorized) then redirect to login page 
        // also remove auth-token from localstorage
        if (this.isObject(err) && (err.status === 401)) {
            localStorage.removeItem('auth-token');
            this.router.navigate(['/login']);
        }
    }
}