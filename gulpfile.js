const {dest, src, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();

function sassTask(){
    return src('scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(dest('app/assets/css'));
}

function browserServer(cb){
    browsersync.init({
        server: {
            dest: '/app'
        }
    });
    cb();
}

function browserReload(cb){
    browsersync.reload();
    cb();
}

function watchTask(){
    watch('app/**/*.html', browserReload);
    watch('app/**/*.js', browserReload);
    watch('scss/**/*.scss', series(sassTask, browserReload));
}

exports.default = series(
    sassTask,
    browserServer,
    watchTask,
);