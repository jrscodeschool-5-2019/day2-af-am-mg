import {test} from 'tape-modern';
import propEq from './propEq';

// test('should return true if key value pair supplied equals key value pair on object', assert => {
//   const moped = {
//     name: 'vespa',
//     cc: '50',
//   };
//   const result = propEq('name', 'vespa', moped);
//   assert.equal(result, true, 'should equal true');
// });

test('should return true if key value pair supplied equals key value pair on object', assert => {
  const moped = {
    name: 'vespa',
    cc: '50',
  };
  const result = propEq('cc', '100', moped);
  assert.equal(result, false, 'should equal false');
});
