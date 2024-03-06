import {AgePipe} from '@app/pipes/age/age.pipe';

describe('Pipes', () => {
    describe('AgePipe', () => {
        it('create an instance', () => {
            const pipe = new AgePipe();
            expect(pipe).toBeTruthy();
        });
    });
});
