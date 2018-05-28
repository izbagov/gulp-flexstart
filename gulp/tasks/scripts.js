import gulp from 'gulp';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babel from 'babelify';
import path from '../paths';

gulp.task('scripts:compile', () => {
  let bundler = browserify(`${path.src.scripts}/main.js`, { debug: true }).transform(babel);
  return bundler
    .bundle()
    .on('error', function (err) { console.error(err); this.emit('end'); })
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(path.dist.scripts));
});

gulp.task('scripts:copy', () => {
  return gulp
    .src(`${path.src.scripts}/vendor/*.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${path.dist.scripts}/vendor`));
});