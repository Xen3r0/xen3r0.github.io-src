// Models
import {HobbyItemModel} from '../src/app/models/hobby-item.model';

export function getHobbiesMockData(): Array<HobbyItemModel> {
    return [
        {
            title: 'test 1',
            icon: 'email'
        },
        {
            title: 'test 2',
            icon: 'email'
        },
    ];
}
