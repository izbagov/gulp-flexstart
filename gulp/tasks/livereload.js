import browserSync from 'browser-sync';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from '../paths';

gulp.task('livereload', () => {
  browserSync.init({
    files: [`${path.baseDist}/**/*`],
    open: !!gutil.env.open,
    reloadOnRestart: true,
    port: gutil.env.port || 3005,
    server: {
      baseDir: [
        `${path.dist.images}`,
        `${path.baseDist}`
      ],
      directory: false
    },
    tunnel: !!gutil.env.tunnel
  })
});