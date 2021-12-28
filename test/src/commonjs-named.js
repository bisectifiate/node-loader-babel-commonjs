import test from 'ava';

import {answer} from '../../src/commonjs-named.cjs';

test('check', (t) => {
	t.is(answer, 42);
});
