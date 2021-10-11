import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform{
  transform(lastName: string | undefined): string {
    if ( lastName === undefined) {
      return ''
    } else {
      return lastName?.charAt(0) + '.'
    }
  }
}
