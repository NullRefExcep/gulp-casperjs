# gulp-casperjs

A [gulp](https://github.com/gulpjs/gulp) plugin for running [CasperJS](https://github.com/n1k0/casperjs) scripts

## Install

```
npm install --save-dev gulp-casperjs
```
Also CasperJS must be installed globally or in project folder

## Usages

gulp file (run `casperjs test`):

```js
var casperJs = require('gulp-casperjs');
gulp.task('test', function () {
  gulp.src('Globs of test files')
    .pipe(casperJs());
});
```
To change the command (default: `test`) used parameter "command":
```js
var casperJs = require('gulp-casperjs');
gulp.task('casperCmd', function () {
  gulp.src('test.js')
    .pipe(casperJs({command:""}));
});
```
If command has value which cast to false, this parameter will ignored.
Previous example run `casperjs test.js`

## LICENSE

The MIT License (MIT)