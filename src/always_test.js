import { test } from 'tape-modern'
import always from './always.js'

test('1 will equal 1', assert => {
  const result = always(1)
  assert.equal(result, 1, '1 should = 1')
})
