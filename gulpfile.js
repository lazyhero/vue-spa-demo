var gulp = require('gulp')
var webpack = require('gulp-webpack')
var named = require('vinyl-named')


var appList = ['app']


gulp.task('default', ['bundle'], function() {
    console.log('done')
})

gulp.task('bundle', function() {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig()))
        .pipe(gulp.dest('dist/'))
})

gulp.task('watch', function() {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig({watch: true})))
        .pipe(gulp.dest('dist/'))
})


/**
 * @private
 */
function getConfig(opt) {
    var config = {
        module: {
            loaders: [
                { test: /\.vue$/, loader: 'vue'},
                { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
            ]
        },
        devtool: 'source-map'
    }
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}

/**
 * @private
 */
function mapFiles(list, extname) {
    return list.map(function (app) {return 'src/' + app + '.' + extname})
}