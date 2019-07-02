import {test} from 'tape-modern';
import isNil from './isNil';

/**
 * @param {any} value
 *
 * @returns {Boolean} true
 */

test('return true if value is null or undefined', assert => {
  const result = isNil(undefined);
  assert.equal(result, true, 'should return true');
});
