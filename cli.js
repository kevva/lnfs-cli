#!/usr/bin/env node
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
const path = require('path');
const lnfs = require('lnfs');
const meow = require('meow');

const cli = meow(`
	Usage
	  $ lnfs <file> <target>

	Example
	  $ lnfs foo.txt bar.txt
	  /home/unicorn/bar.txt -> /home/unicorn/foo.txt
`);

if (cli.input.length < 2) {
	console.error('Source file and target required');
	process.exit(1);
}

lnfs(cli.input[0], cli.input[1]).then(() => {
	console.log(`${path.resolve(cli.input[1])} -> ${path.resolve(cli.input[0])}`);
});
