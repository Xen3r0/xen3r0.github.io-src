// Pipes
import {AgePipe} from './age.pipe';

describe('Pipes', () => {
    describe('AgePipe', () => {
        it('create an instance', () => {
            const pipe = new AgePipe();
            expect(pipe).toBeTruthy();
        });
    });
});
