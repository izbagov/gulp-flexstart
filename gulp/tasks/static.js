import gulp from 'gulp';
import path from '../paths';

gulp.task('static', () => {
  return gulp
    .src(`${path.src.static}/**/*`)
    .pipe(gulp.dest(path.baseDist))
})