wiggle-mouse
============

A CLI to keep your screen active by moving the mouse around

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wiggle-mouse.svg)](https://npmjs.org/package/wiggle-mouse)
[![Downloads/week](https://img.shields.io/npm/dw/wiggle-mouse.svg)](https://npmjs.org/package/wiggle-mouse)
[![License](https://img.shields.io/npm/l/wiggle-mouse.svg)](https://github.com/a-poor/wiggle-mouse/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
<!-- tocstop -->
# Usage

```sh-session
$ npm i -g wiggle-mouse
$ wiggle-mouse (-v|--version|version)
wiggle-mouse/0.1.0 linux-x64 node-v14.15.4
$ wiggle-mouse --help [COMMAND]
A CLI to keep your screen active by moving the mouse around randomly.

USAGE
  $ wiggle-mouse

OPTIONS
  -c, --click            Should the mouse be intermittantly clicked?
  -h, --help             show CLI help
  -p, --mousepos         Display the position of the mouse (and don't run the wiggler)
  -r, --rate=rate        [default: 1500] Rate of movement in milliseconds
  -u, --until=until      Number of milliseconds to run the wiggler
  -v, --version          show CLI version
  --clickrate=clickrate  [default: 100] Probability to click (out of 100) where the mouse lands, if click is true.

```
