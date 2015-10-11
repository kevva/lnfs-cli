'use strict';
const execFile = require('child_process').execFile;
const path = require('path');
const test = require('ava');

test('show help screen', function (t) {
	t.plan(2);

	execFile(path.join(__dirname, 'cli.js'), ['--help'], function (err, stdout) {
		t.assert(!err, err);
		t.assert(/afely force create symlinks/.test(stdout), stdout);
	});
});
