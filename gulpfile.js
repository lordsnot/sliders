var gulp = require('gulp');
var sass = require('gulp-sass');
var connent = require('gulp-connect');

gulp.task('scss', function(){
  return gulp.src('app/sass/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});

gulp.task("watch", function(){

	gulp.watch("app/sass/*.scss", ["scss"]);

});

gulp.task('default', ['scss', 'watch']);