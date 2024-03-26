import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appAge',
    standalone: true
})
export class AgePipe implements PipeTransform {
    transform(value: Date, args?: any): string {
        return this.calculateAge(value).toString();
    }

    private calculateAge(value: Date): number {
        const today = new Date();
        const monthDiff = today.getMonth() - value.getMonth();
        let age = today.getFullYear() - value.getFullYear();

        if (0 > monthDiff || (0 === monthDiff && today.getDate() < value.getDate())) {
            age--;
        }

        return age;
    }
}
