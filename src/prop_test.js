import { test } from 'tape-modern'
import prop from './prop'

test('This is a prop test', function(assert) {
  const result = prop('string', { string: 'hello' })
  assert.equal(result, 'hello', 'On success, the object should return hello')
})
