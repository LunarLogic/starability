var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('sass-demo', function() {
  return gulp.src('scss/styles.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass-demo']);
});

gulp.task('default', function(callback) {
  runSequence(['sass-demo', 'watch'],
    callback
  );
});