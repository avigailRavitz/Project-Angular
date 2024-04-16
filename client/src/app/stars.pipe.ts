import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyLevel',
  standalone: true
})
export class StarsPipe implements PipeTransform {

  transform(value: string,difficultyLevel : number|any): string {
    const stars='★'.repeat(difficultyLevel)+'☆'.repeat(5-difficultyLevel);
    return `${value}${stars}`;
  }

}
