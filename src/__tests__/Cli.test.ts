import { cli } from '../cli';

test('My CLI', () => {
  expect(cli('Carl')).toBe('Carl');
});
