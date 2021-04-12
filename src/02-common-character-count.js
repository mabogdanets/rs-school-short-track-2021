/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a = s1.split('');
  const b = s2.split('');
  const A = new Set(a);
  const B = new Set(b);

  A.forEach((value) => {
    if (!B.has(value)) {
      A.delete(value);
    }
  });

  B.forEach((value) => {
    if (!A.has(value)) {
      B.delete(value);
    }
  });

  return B.size + 2;
}

module.exports = getCommonCharacterCount;
