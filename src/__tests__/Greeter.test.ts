import { cli } from '../index';
test('My Greeter', () => {
  expect(cli('Carl')).toBe('Hello Carl');
});
