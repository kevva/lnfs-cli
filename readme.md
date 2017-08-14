# lnfs-cli [![Build Status](http://img.shields.io/travis/kevva/lnfs-cli.svg?style=flat)](https://travis-ci.org/kevva/lnfs-cli)

> Safely force create symlinks


## Install

```
$ npm install --global lnfs-cli
```


## Usage

```
$ lnfs --help

	Usage
		$ lnfs <file> <target>

	Example
		$ lnfs foo.txt bar.txt
		/home/unicorn/bar.txt -> /home/unicorn/foo.txt

	Options
		--type  Can be set to dir, file, or junction and is only available on Windows (ignored on other platforms)
```


## Related

* [lnfs](https://github.com/kevva/lnfs) - API for this module


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
