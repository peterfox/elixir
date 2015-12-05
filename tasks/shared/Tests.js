var gulp = require('gulp');
var Elixir = require('../../index');

var notify = new Elixir.Notification();


module.exports = function(options) {
     new Elixir.Task(options.name, function() {
        this.log(options.category + ": " + options.src);

        return (
            gulp
                .src(options.src)
                .pipe(options.plugin(Elixir.config.phpBinPath + '/' + options.binary, options.pluginOptions))
                .on('error', function(e) {
                    notify.forFailedTests(e, options.name);

                    this.emit('end');
                })
                .pipe(notify.forPassedTests(options.name))
        );
    })
        .watch(options.src, options.category)
        .watch(Elixir.config.appPath + '/**/*.php', options.category)
        .watch('./resources/views/**/*.php', options.category)
};
