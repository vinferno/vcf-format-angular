import { cli } from '../cli';

test('My Greeter', () => {
  expect(cli('Carl')).toBe('Carl');
});
