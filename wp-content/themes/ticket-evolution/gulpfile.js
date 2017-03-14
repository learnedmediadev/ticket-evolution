var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');

gulp.task('default', function() {
	console.log("test");
});

//compile sass to css
gulp.task('sass', function () {
	return gulp.src('./development/styles/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./'))
		.pipe(notify("Sass updated."))
		.pipe(livereload());
});

//concat all js 
gulp.task('scripts', function() {
	return gulp.src('./development/scripts/*.js')
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./js/'))
		.pipe(notify("Scripts updated."))
		.pipe(livereload());
});

//livereload any php edits
gulp.task('php', function() {
	gulp.src('./*.php')
		.pipe(notify("PHP files updated."))
		.pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('./development/styles/*.scss', ['sass'] );
	gulp.watch('./development/scripts/*.js', ['scripts']);
	gulp.watch('./*.php', ['php']);
});