import test from 'ava';

import answer from '../../src/commonjs-default.cjs';

test('check', (t) => {
	t.is(answer, 42);
});
