// Models
import {EducationItemModel} from '../src/app/models/education-item.model';

export function getEducationMockData(): Array<EducationItemModel> {
    return [
        {
            title: 'test 1',
            year: 2018,
            location: 'Marseille'
        },
        {
            title: 'test 2',
            year: 20198,
            location: 'Paris'
        },
    ];
}
