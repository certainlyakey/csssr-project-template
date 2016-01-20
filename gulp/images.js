import gulp from 'gulp';

gulp.task('images', () => (
	gulp.src(['app/images/**/*']).pipe(gulp.dest('dist'))
));
