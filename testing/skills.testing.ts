// Models
import {SkillItemModel} from '../src/app/models/skill-item.model';

export function getSkillsMockData(): Array<SkillItemModel> {
    return [
        {
            title: 'test 1',
            percent: 90
        },
        {
            title: 'test 2',
            percent: 100
        },
    ];
}
