import gulp from 'gulp';
import changed from 'gulp-changed';
import filter from 'gulp-filter';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';

gulp.task('copy', () => (
	gulp.src('app/resources/**/*')
		.pipe(changed('dist'))
		.pipe(gulpif(!gutil.env.robots, filter(file => !/resources[\\\/]robots\.txt/.test(file.path))))
		.pipe(gulp.dest('dist'))
));
gulp.src(['app/images/**/*']).pipe(gulp.dest('dist/assets/images'));