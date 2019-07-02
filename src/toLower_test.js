import toLower from './toLower';
import {test} from 'tape-modern';

/**
 * @param {string} value
 *
 *@return {string}
 */

test('convert value to lowercase', assert => {
  const string = 'HELLO';
  const result = toLower(string);
  console.log(result);
  assert.equal(result, 'hello', 'hello should be in lowercase');
});
