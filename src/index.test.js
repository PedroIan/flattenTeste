const flatten = require('./index');

test('Uso do flatten()', () => {
  // O teste original era:
  // expect(flatten([1, [2, 3], 4, [5, 6]])).toBe([1, 2, 3, 4, 5, 6]);
  // expect(flatten([[1, 2, 3]])).toBe([1, 2, 3]);
  // expect(flatten([1, 2, 3])).toBe([1, 2, 3]);
  //
  // Mas o método toBe irá falhar todas as vezes,
  // pois mesmo que o objeto retornado seja igual,
  // eles são considerados diferentes
  // por estarem em diferentes lugares da memória.

  // Assim, a forma de realizar o teste corretamente
  // é utilizando o método toEqual
  expect(flatten([1, [2, 3], 4, [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(flatten([[1, 2, 3]])).toEqual([1, 2, 3]);
  expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);

  // Testes adicionais pessoais
  expect(flatten([1, [[2], 3], 4, [5, [6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(flatten([1, [[[2], 3], 4], [5, [6]]])).toEqual([1, 2, 3, 4, 5, 6]);
});
