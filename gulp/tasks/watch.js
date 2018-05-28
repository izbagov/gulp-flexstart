import gulp from 'gulp';
import watch from 'gulp-watch';
import runSequence from "run-sequence";
import { reload } from 'browser-sync';
import path from '../paths';

gulp.task('watch', () => {
  global.watch = true;

  watch(`${path.src.styles}/**/*.{scss,sass}`, () => {
    runSequence("styles", reload.bind(null, `${path.dist.styles}/app.min.css`));
  })

  watch(`${path.src.static}/**/*`, () => {
    runSequence('static', reload);
  })

  watch(`${path.src.scripts}/vendor/*.js`, () => {
    runSequence('scripts:copy', reload);
  });

  watch([`${path.src.scripts}/**/*.js`, `!${path.src.scripts}/vendor/*.js`], () => {
    runSequence('scripts:compile', reload);
  });
})