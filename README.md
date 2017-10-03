# gulp-casperjs

A [gulp](https://github.com/gulpjs/gulp) plugin for running [CasperJS](https://github.com/n1k0/casperjs) scripts

## Install

```
npm install --save-dev gulp-casperjs
```

## Usages

```js
var casperJs = require('gulp-casperjs');
gulp.task('test', function () {
  gulp.src('Globs of test files')
    .pipe(casperJs()); //run casperjs test
});
```

To change the command (default: `test`) use parameter `command`:

```js
var casperJs = require('gulp-casperjs');
gulp.task('casperCmd', function () {
  gulp.src('test.js')
    .pipe(casperJs({command:''})); //run casperjs test.js
});
```

Command can be `array` or `string`.
If command has value which cast to `false`, this parameter will be ignored.

To set custom path to CasperJS use parameter `binPath`:

```js
var casperJs = require('gulp-casperjs');
gulp.task('test', function () {
  gulp.src('test.js')
    .pipe(casperJs({binPath: './node_modules/casperjs/bin/casperjs'})); //custom path to CasperJs
});
```

Default is `casperjs` (global)


## Options

It is possible to pass casperjs options via main options object.

```js
var casperJs = require('gulp-casperjs');
gulp.task('casperCmd', function () {
  const options = {
    logLevel: 'debug',
    includes: 'node_modules/package/index.js,node_modules/pacakge2/index.js',
    webSecurity: 'no'
  };
  gulp.src('test.js')
    .pipe(casperJs(options)); //run casperjs test.js
});
```

Options are documented in official CasperJS documentation http://docs.casperjs.org
Possible values are

| Option      | Parameter Name | Possible Values                       |
|-------------|----------------|---------------------------------------|
| concise     | --concise      |                                       |
| engine      | --engine       | [phantomjs \| slimerjs]               |
| failFast    | --fail-fast    |                                       |
| includes    | --includes     | `<filename>,<filename>`               |
| logLevel    | --log-level    | `[debug \| info \| warning \| error]` |
| noColors    | --no-colors    |                                       |
| post        | --post         | `<filename>`                          |
| pre         | --pre          | `<filename>`                          |
| webSecurity | --web-security | no                                    |
| xunit       | --xunit        | `<filename>`                          |




## LICENSE

The MIT License (MIT)
