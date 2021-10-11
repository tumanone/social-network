import {Pipe, PipeTransform} from "@angular/core";
import {Education} from "../interfaces/user.interface";


@Pipe({
  name: 'educationShow'
})
export class EducationShowPipe implements PipeTransform{
  transform(eduArr: Education[]): any {
    const ed = eduArr.map((ed) => {
      return (!ed) ? '-' : `${ed.university} (${ed.entry_year} - ${ed.graduation_year})`
    })
    return ed.join(', ')
  }
}
