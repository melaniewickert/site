var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	image = require('gulp-image'),
	jshint = require('gulp-jshint'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	newer = require('gulp-newer');

gulp.task('styles', function() {
	return gulp.src('themes/mel/assets/sass/style.scss')
	.pipe(sass({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}).on('error', sass.logError))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
	]))
	.pipe(gulp.dest('themes/mel/static/css/'));
});

gulp.task('javascript', function() {
	return gulp.src(['themes/mel/static/js/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(gulp.dest('themes/mel/static/js/'));
});

gulp.task('watch', function() {
	gulp.watch('themes/mel/assets/sass/*.scss', ['styles']);
	//gulp.watch('themes/mel/static/js/*.js', ['javascript']);
});

gulp.task('default', ['watch']);
