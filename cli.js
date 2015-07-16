#!/usr/bin/env node
'use strict';
var path = require('path');
var lnfs = require('lnfs');
var meow = require('meow');

var cli = meow({
	help: [
		'Usage',
		'  $ lnfs <file> <target>',
		'',
		'Example',
		'  $ lnfs foo.txt bar.txt',
		'  /home/unicorn/bar.txt -> /home/unicorn/foo.txt'
	]
});

if (cli.input.length < 2) {
	console.error('Source file and target required');
	process.exit(1);
}

lnfs(cli.input[0], cli.input[1], function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(path.resolve(cli.input[1]) + ' -> ' + path.resolve(cli.input[0]));
});
