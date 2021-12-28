import test from 'ava';

import {answer} from '../../src/module-named.js';

test('check', (t) => {
	t.is(answer, 42);
});
