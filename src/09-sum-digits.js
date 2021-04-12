/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  /* let sum = 0;
  let curr;
  do {
    let m = n.toString().split('');

    for (let i = 0; i < m.length; i++) {
      curr = Number(m[i]);
      sum += curr;
    }
    if (sum / 10 >= 1) {
      m = sum;
    }
  } while (sum % 10 > 0);

  return sum; */
  // throw new Error('Not implemented');

  const m = n.toString().split(''); //
  // ['9','1']
  let sum = 0; let
    curr;
  for (let i = 0; i < m.length; i++) {
    curr = Number(m[i]);
    sum += curr;
  }
  if (sum / 10 >= 1) {
    return getSumOfDigits(sum);
  }
  return sum;
}

module.exports = getSumOfDigits;
