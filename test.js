import fs from 'fs';
import execa from 'execa';
import test from 'ava';

test('symlink a file', async t => {
	await execa('./cli.js', [__filename, 'tmp.js']);
	const file = await fs.realpathSync('tmp.js');
	t.is(file, __filename);
	await fs.unlinkSync('tmp.js');
});
