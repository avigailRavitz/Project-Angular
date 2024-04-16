import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure: true
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number | undefined): string {
    if (minutes === undefined) {
      return 'N/A';
    }

    const hours = Math.floor(minutes / 60);
    const preparationTimeInMinutes = minutes % 60;
    
    if (hours === 0) {
      return `${preparationTimeInMinutes} minutes`;
    } else if (preparationTimeInMinutes === 0) {
      return `${hours} hours`;
    } else {
      return `${hours} hours ${preparationTimeInMinutes} minutes`;
    }
    
  }

}