import { helloWorld } from '..';

describe('example', () => {
it('Should return hello world!', () => {
expect(helloWorld()).toStrictEqual(
'Hello World',
'text equal to hello world'
);
});
});