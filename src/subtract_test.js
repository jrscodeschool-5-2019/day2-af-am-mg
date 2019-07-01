import { test } from 'tape-modern'
import subtract from './subtract'

test('1 - 1 should equal zero', function (assert) {
    const test = subtract(1, 1);
    assert.equal(test, 0, "1 - 1 should be 0");
});

