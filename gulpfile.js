const sass = require('gulp-sass')(require('sass'))
const gulp = require('gulp')

const ulify = require('gulp-uglify')


const imagemin = require('gulp-imagemin', { esModule: false });

function compilaImagens() {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
}




function compilaJs(){
    return gulp.src('./src/script/*.js').pipe(ulify()).pipe(gulp.dest('./build/script'))
}


function compilaSass(){
    return gulp.src('./src/styles/*.scss').pipe(sass({outputStyle:'compressed'})).pipe(gulp.dest('./build/styles'))
}


function compilarTudo (){
    gulp.watch('./src/img/*',{ignoreInitial:false},gulp.parallel(compilaImagens))
    gulp.watch('/src/script/*.js',{ignoreInitial:false},gulp.parallel(compilaJs))
    gulp.watch('./src/styles/*.scss',{ignoreInitial:false},gulp.parallel(compilaSass))
}


exports.default = compilarTudo