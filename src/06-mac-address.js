/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const regex = /[A-F\d][A-F\d]-[A-F\d][A-F\d]-[A-F\d][A-F\d]-[A-F\d][A-F\d]-[A-F\d][A-F\d]-[A-F\d][A-F\d]/;
  const res = regex.test(n);
  return res;
}
/*
//throw new Error('Not implemented');
let regex = /[a-z\d_]{4,16}/;
    let res = username.match(regex);
    if (res) res = res.join('');
   return  username === res ? true : false; */
module.exports = isMAC48Address;
