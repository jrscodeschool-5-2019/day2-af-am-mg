import { test } from 'tape-modern'
import divide from './divide'

test('2 / 2 = 1', function(assert) {
  const result = divide(2, 2)
  assert.equal(result, 1, '2/2 should be 1')
})
