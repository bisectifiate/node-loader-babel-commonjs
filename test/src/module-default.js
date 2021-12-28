import test from 'ava';

import answer from '../../src/module-default.js';

test('check', (t) => {
	t.is(answer, 42);
});
