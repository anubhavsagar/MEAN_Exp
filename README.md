## QuickStart Guide

### Installation
  Download `MEAN_Exp` and install dependency modules:

    $ git clone https://github.com/anubhavsagar/MEAN_Exp.git
    $ cd MEAN_Exp
    $ npm install && bower install

### Development (`config/development.json`)

  [Grunt](http://gruntjs.com/) tasks to build your app:

    $ grunt                    # start server
    $ grunt build              # jshint & build
    $ grunt clean              # clean generated files

* If you see the `Could not load the bindings file.` error message, please perform `npm rebuild` then try again.

### Deployment (`config/{production|staging}.json`)

  First, prepare and optimize all files used in production/staging environment:

    $ grunt build

  Then your app can be started in production/staging mode using this command:

    $ NODE_ENV={production|staging} node server

  It is recommended to use a tool like [forever](https://github.com/nodejitsu/forever) to ensure your app running continuously:

    $ npm install forever -g
    $ NODE_ENV={production|staging} PORT=3000 forever start server

  You can alternatively use a system-wide process control system such as [Supervisor](http://supervisord.org/) with the following configuration (`supervisord.conf`):

    [program:ultimate-3000]
    directory = <absolute-path-of-project-root>
    environment = NODE_ENV={production|staging}, PORT=3000
    command = node server
    autostart = true
    autorestart = true


This project was built using [ultimate-seed by pilwon](https://github.com/pilwon/ultimate-seed)

For further info about the seed project used and for help in setting up,
please visit the [Readme of ultimate-seed](https://github.com/pilwon/ultimate-seed/blob/master/README.md)

## Credits

  Creator and Contributors of [ultimate-seed](https://github.com/pilwon/ultimate-seed)
  
  * [Pilwon Huh](https://github.com/pilwon)
  * [Brian Park](https://github.com/yaru22)
  * [All the other contributors](https://github.com/pilwon/ultimate-seed/graphs/contributors)

## License

<pre>
The MIT License (MIT)

Copyright (c) 2012-2014 Pilwon Huh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>