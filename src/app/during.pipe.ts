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
      return `${preparationTimeInMinutes} דקות`;
    } else if (preparationTimeInMinutes === 0) {
      return `${hours} שעות`;
    } else {
      return `${hours} שעות ${preparationTimeInMinutes} דקות`;
    }
  }

}