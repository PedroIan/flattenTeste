/**
 * Desafio: escrever uma função que receba um array com valores ou sub-arrays, e retorne todos os valores abertos em um único array
 * Todos os valores serão compostos por numeros inteiros.
 *
 * IMPORTANTE:
 * Não devem ser utilizadas as funções flat() ou flatMap() dos arrays.
 * A ideia é avaliar a lógica utilizada, e não a utilização dos métodos prontos.
 *
 * Voce pode testar o seu codigo rodando o comando `npm run test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @example `flatten([1, [2, 3], 4, [5, 6]])` retorna `[1, 2, 3, 4, 5, 6]`
 * @param numbers array de inteiros ou sub-arrays
 * @returns novo array, somente com os valores
 */
function flatten(array) {
  return [...array].reduce((pV, cV) => {
    if (Array.isArray(cV)) return [...pV, ...flatten([...cV])];
    else return [...pV, cV];
  }, []);
}

module.exports = flatten;
