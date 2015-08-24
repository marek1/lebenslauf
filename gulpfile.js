var gulp    = require('gulp'),
  watch = require('gulp-watch'),
  concat    = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  rename    = require('gulp-rename'), // to rename any file
  gulpif = require('gulp-if'),
  sprite = require('css-sprite').stream;

// generate sprite.png and _sprite.scss
gulp.task('sprites', function () {
  return gulp.src('./img/*.png')
    .pipe(sprite({
      name: 'sprite',
      style: '_sprite.css',
      cssPath: './css'
    }))
    .pipe(gulpif('*.png', gulp.dest('dist/'), gulp.dest('css/')))
});
// g
gulp.task('style', function () {
  gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
  gulp.watch("css/*.css", ["style"]);
});



gulp.task('default', ['style']);
