import test from 'ava';

import x from '../../src/commonjs-named.cjs';
const {answer} = x;

test('check', (t) => {
	t.is(answer, 42);
});
