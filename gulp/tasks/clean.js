import gulp from 'gulp';
import del from 'del';
import vinylPaths from 'vinyl-paths';
import path from '../paths';

gulp.task('clean', () => {
  return gulp
    .src(`${path.baseDist}/*`)
    .pipe(vinylPaths(del));
});