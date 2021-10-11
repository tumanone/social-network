import { Pipe, PipeTransform } from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Pipe({
  name: 'mapFormGroup'
})
export class MapFormGroupPipe implements PipeTransform {

  transform(value: AbstractControl): FormGroup {
    return value as FormGroup;
  }

}
