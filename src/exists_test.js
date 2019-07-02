import {test} from 'tape-modern';
import exists from './exists';

test('value returns true if not null or undefined', assert => {
  const result = exists(undefined);
  assert.equal(result, false, 'should be false');
});
