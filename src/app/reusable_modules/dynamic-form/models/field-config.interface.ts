import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: any[],
  textField ?: string,
  valueField ?: string,
  placeholder?: string,

  type: string,
  inputType ?: string,
  buttonType ?: string,

  validation?: ValidatorFn[],
  value?: any,
  colSize?:number
}
