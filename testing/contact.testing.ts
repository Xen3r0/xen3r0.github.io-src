// Models
import {ContactItemModel} from '../src/app/models/contact-item.model';

export function getContactMockData(): Array<ContactItemModel> {
    return [
        {
            href: 'mailto:test2@email.net',
            icon: 'email',
            title: 'test 1',
            custom: false,
        },
        {
            href: 'mailto:test2@email.net',
            icon: 'email',
            title: 'test 2',
            custom: false,
        }
    ];
}
