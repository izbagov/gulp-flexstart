import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sass from "gulp-ruby-sass";
import autoprefixer from 'gulp-autoprefixer';
import svg from 'postcss-svg';
import flexfixes from 'postcss-flexbugs-fixes';
import cmq from 'gulp-combine-mq';
import minifyCss from 'gulp-minify-css';
import rename from 'gulp-rename';
import path from '../paths';

gulp.task('styles', () => {
  return sass(`${path.src.styles}/**/*.scss`, {
      style: 'compact'
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(postcss([
      svg({
        paths: [path.src.svg]
      }),
      flexfixes()
    ]))
    .pipe(cmq({ beautify: false }))
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.dist.styles))
})