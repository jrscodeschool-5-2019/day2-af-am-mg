import toUpper from './toUpper';
import {test} from 'tape-modern';

/**
 * @param {String} value
 *
 * @return {String}
 */

test('convert value to uppercase', assert => {
  const string = 'hello';
  const result = toUpper(string);
  assert.equal(result, 'HELLO', 'hello should be capital');
});
