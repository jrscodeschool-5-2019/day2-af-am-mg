import { test } from 'tape-modern'

import inc from './inc'

test('5 + 1 = 6', function(assert) {
  const result = inc(5)
  assert.equal(result, 6, '5 + 1 should equal 6')
})
