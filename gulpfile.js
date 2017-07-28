var gulp = require('gulp');
var sass = require('gulp-sass');
var connent = require('gulp-connect');

gulp.task('sass', function(){
  return gulp.src('app/sass/*.sass')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});

gulp.task("watch", function(){

	gulp.watch("app/sass/*.sass", ["sass"]);

});

gulp.task('default', ['sass', 'watch']);