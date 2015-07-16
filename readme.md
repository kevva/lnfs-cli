# lnfs-cli [![Build Status](http://img.shields.io/travis/kevva/lnfs-cli.svg?style=flat)](https://travis-ci.org/kevva/lnfs-cli)

> Safely force create symlinks

*See [lnfs](https://github.com/kevva/lnfs) for the programmatic API and issue tracker.*


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
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
