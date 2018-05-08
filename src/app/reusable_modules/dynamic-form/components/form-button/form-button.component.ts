import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-button',
  //styleUrls: ['form-button.component.scss'],
  template: `
    <div 
      class="dynamic-field form-button col-md-{{config.colSize || '12'}}"
      [formGroup]="group">
      <div [ngSwitch]="config.buttonType">
        <button *ngSwitchCase="'submit'" class="btn btn-success"
          [disabled]="group.pristine || !group.valid"
          type="submit">
          {{ config.name }}
        </button>
        <button *ngSwitchCase="'reset'" class="btn btn-danger"
          [disabled]="group.pristine"
          type="reset" (click)="group.reset()">
          {{ config.name }}
        </button>
        <button *ngSwitchDefault class="btn btn-primary"
          [disabled]="config.disabled"
          [attr.type]="config.buttonType || 'button'">
          {{ config.name }}
        </button>
      </div>
    </div>
  `
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
