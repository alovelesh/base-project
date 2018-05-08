import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
    <div 
      class="dynamic-field form-select col-md-{{config.colSize || '12'}}"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options" [value]="isObject(option) ? option[config.valueField] : option">
          {{ isObject(option) ? option[config.textField] : option }}
        </option>
      </select>
      <div *ngIf="group.controls[config.name].errors && (group.controls[config.name].touched || group.controls[config.name].dirty)">
          <span class="redItalic" *ngIf="group.controls[config.name].errors.required">{{config.label}} is required!</span>
      </div>
    </div>
  `
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  isObject(val) { return val !== null && typeof val === 'object'; }
}
