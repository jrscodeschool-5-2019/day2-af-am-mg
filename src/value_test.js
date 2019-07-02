import { test } from 'tape-modern'
import value from './value.js'

test('1 will equal 1', assert => {
  const result = value(1)
  assert.equal(result, 1, '1 should = 1')
})
