// Angular
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appAge',
    pure: true
})
export class AgePipe implements PipeTransform {
    transform(value: Date, args?: any): string {
        return this.calculateAge(value).toString();
    }

    private calculateAge(value: Date): number {
        const diff = (Date.now() - value.getTime());
        const age = new Date(diff);

        return Math.abs(age.getUTCFullYear() - 1970);
    }
}
