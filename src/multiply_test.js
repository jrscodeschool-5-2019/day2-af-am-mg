import { test } from 'tape-modern'
import multiply from './multiply'

test('2 * 2 = 4', function(assert) {
  const test = multiply(2, 2)
  assert.equal(test, 4, '2*2 should be 4')
})
