const flatten = require('./index');

test('Uso do flatten()', () => {
  expect(flatten([1, [2, 3], 4, [5, 6]])).toBe([1, 2, 3, 4, 5, 6]);
  expect(flatten([[1, 2, 3]])).toBe([1, 2, 3]);
  expect(flatten([1, 2, 3])).toBe([1, 2, 3]);
});
