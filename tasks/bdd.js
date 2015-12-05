var gulp = require('gulp');
var Elixir = require('laravel-elixir');


/*
 |----------------------------------------------------------------
 | BDD Watcher
 |----------------------------------------------------------------
 |
 | This task will keep an eye on any tasks that are part of the
 | tdd category. By default this includes Behat
 | tests. Run `gulp bdd` and your tests will auto-trigger.
 |
 */

gulp.task('bdd', function() {
    new Elixir.Log.message('Watching for tests...');

    Elixir.tasks
        .filter(function(task) {
            return task.category == 'bdd';
        })
        .forEach(function(task) {
            gulp.watch(task.watchers, [task.name]);
        });
});
