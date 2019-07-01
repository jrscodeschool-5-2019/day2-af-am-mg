import { test } from 'tape-modern'

import dec from './dec'

test('5 - 1 = 4', function(assert) {
  const result = dec(5)
  assert.equal(result, 4, '5 - 1 should equal 4')
})
