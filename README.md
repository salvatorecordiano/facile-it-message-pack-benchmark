# A naive benchmark for MessagePack

This repository contains code showed in the post [MessagePack: an alternative to JSON?](http://engineering.facile.it/blog/eng/message-pack-an-alternative-to-json/) published on [Facile.it Engineering Blog](http://engineering.facile.it).

## Installation

```
$ git clone https://github.com/salvatorecordiano/facile-it-message-pack-benchmark.git
$ cd facile-it-message-pack-benchmark
$ npm install
```

## First test

```
$ time node test_parse_json.js
```

Sample output:

```
real	0m47.296s
user	0m47.202s
sys	0m0.059s
```

## Second test

```
$ time node test_unpack_msgpack.js
```

Sample output:

```
real	1m47.244s
user	1m47.050s
sys	0m0.120s
```

## Author

[Salvatore Cordiano](http://twitter.com/parallelit)

## License

MIT License

Copyright (c) 2016 Salvatore Cordiano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
