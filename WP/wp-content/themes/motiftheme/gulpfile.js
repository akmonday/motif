// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our stylus
gulp.task('stylus', function() {
     return gulp.src([
        'stylus/css/normalize.styl',
        'stylus/css/webflow.styl',
        'bootstrap-3.3.2-dist/css/bootstrap.css',
        'stylus/css/motif-v03.webflow.styl',
        'stylus/css/style.styl',
        'stylus/css/infonam/duy.styl',
        'stylus/css/infonam/khanh.styl',
        'stylus/css/infonam/phong.styl',
        'stylus/css/infonam/tong.styl',
        'stylus/css/style-responsive.styl',
        // 'stylus/css/dev-rwd.styl',
        'stylus/css/ie8.styl'
        ])
        .pipe(stylus())
        .pipe(concat('motiftheme.css'))
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        'stylus/js/jquery-1.11.1.js',
        'stylus/js/webflow.js',
        'bootstrap-3.3.2-dist/js/bootstrap.js',
        'stylus/js/custom.js'
        ])
        .pipe(concat('motiftheme.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('motiftheme.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('stylus/js/*.js', ['lint', 'scripts']);
    gulp.watch('stylus/css/*.styl', ['stylus']);
});

// Default Task
gulp.task('default', ['lint', 'stylus', 'scripts', 'watch']);