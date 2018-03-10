let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');

gulp.task('html',function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./dest'))
        .pipe(browserSync.reload({stream:true}));
});

// компилируем sass в папку css в app
gulp.task('sassCompile', function () {
    gulp.src('./app/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./dest/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function () {
    gulp.watch('./app/**/*.sass', ['sassCompile']);
    gulp.watch('./app/**/*.html', ['html']);
});

gulp.task('server',function () {
    browserSync({
        server: {
            baseDir: './dest',
        }
    });
});

gulp.task('default', ['sassCompile', 'watch', 'server'], function () {
    console.log('Default task completed!');
});