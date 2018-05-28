import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => {
  runSequence([
    'styles',
    'scripts:compile',
    'scripts:copy',
    'static',
  ],
    'livereload',
    'watch'
  );
});