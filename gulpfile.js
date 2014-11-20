var gulp = require('gulp'),
		connect = require('gulp-connect'),
		watch = require('gulp-watch');

var PORT = process.env.PORT || 3000;

gulp.task('default', function() {
  console.log("Gulp Running");
});


gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true,
        port: PORT
    });
});

gulp.task('watch',function(){
  gulp.watch(['src/css/*.css'],['css']);
  gulp.watch(['src/js/*.js'],['js']);
  gulp.watch(['src/*.html'],['html']);
})

gulp.task('livereload', function(){
  gulp.watch('public/**/*.*', function(){
    gulp.src('public/**/*.*').pipe(connect.reload());
  });
});

gulp.task('bootstrap', function(){
  return gulp.src('bower_components/bootstrap/dist/**/*.*')
             .pipe(gulp.dest('public'));
});

gulp.task('jq', function(){
  return gulp.src('bower_components/jquery/dist/jquery.js')
             .pipe(gulp.dest('public/js/'));
});

gulp.task('css', function(){
  gulp.src(['src/css/*.css'])
      .pipe(gulp.dest('public/css/'));
});

gulp.task('js', function(){
  gulp.src(['src/js/*js'])
      .pipe(gulp.dest('public/js/'));
});

gulp.task('html', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('public'));
});

gulp.task('copy',['bootstrap','jq','css','js','html']);

gulp.task('server', ['connect', 'watch', 'livereload']);