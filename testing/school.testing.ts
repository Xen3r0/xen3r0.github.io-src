// Models
import {SchoolItemModel} from '../src/app/models/school-item.model';

export function getSchoolMockData(): Array<SchoolItemModel> {
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
