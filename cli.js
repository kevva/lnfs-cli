#!/usr/bin/env node
'use strict';
const path = require('path');
const lnfs = require('lnfs');
const meow = require('meow');

const typeOptions = ['file', 'dir', 'junction'];

const cli = meow(`
	Usage
	  $ lnfs [--type=<string>] <file> <target>

	Options
				--type, -t  Specify a symlink type [${typeOptions.join('|')}]
				--dir, -d Alias for --type dir
				--junction, -j Alias for --type junction

	Example
	  $ lnfs foo.txt bar.txt
	  /home/unicorn/bar.txt -> /home/unicorn/foo.txt
`, {
	alias: {
		t: 'type',
		j: 'junction',
		d: 'dir'
	}
});

if (cli.input.length < 2) {
	console.error('Source file and target required');
	process.exit(1);
}

let type = cli.flags.type;

if (type && typeOptions.indexOf(type) === -1) {
	console.error(`\`type\` option is invalid. should be one of these values: ${typeOptions.join()}`);
	process.exit(1);
}

if (cli.flags.dir) {
	type = 'dir';
}

if (cli.flags.junction) {
	type = 'junction';
}

lnfs(cli.input[0], cli.input[1], type).then(() => {
	console.log(`${path.resolve(cli.input[1])} -> ${path.resolve(cli.input[0])}`);
});
