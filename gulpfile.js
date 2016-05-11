var gulp = require('gulp');

gulp.task('ngdocs', ['connect_ngdocs'], function () {
  var gulpDocs = require('gulp-ngdocs');
  var options = {
    /* pass both .min.js and .min.js.map files for angular and angular-animate */
    scripts: [
      "src/app/component1/component1.js" // -> For instance
    ]
  };
  return gulp.src([
         'src/app/**/*.js',
         '!src/app/**/*.spec.js'
        
        ])
    .pipe(gulpDocs.process(options))
    .pipe(gulp.dest('docs'));
   
});
gulp.task('connect_ngdocs', function() {
var connect = require('gulp-connect');
  connect.server({
    root: 'docs',
    livereload: false,
    fallback: 'docs/index.html',
    port: 8083
  });
});
