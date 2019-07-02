import {test} from 'tape-modern';
import not from './not';

test('should negate truthyness of value', assert => {
  const result = not(false);
  assert.equal(result, true, 'should be true');
});

test('should negate truthyness of value', assert => {
  const result = not('Hello');
  assert.equal(result, false, 'should be false');
});
