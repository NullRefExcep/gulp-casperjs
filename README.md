# gulp-casperjs

A [gulp](https://github.com/gulpjs/gulp) plugin for runing [CasperJS](https://github.com/n1k0/casperjs) tests

## Install

```
npm install --save-dev gulp-casperjs
```
## Usages

gulp file:

```js
var casperJs = require('gulp-casperjs');
gulp.task('test', function () {
  gulp.src('Globs of test files')
    .pipe(casperJs());
});

```