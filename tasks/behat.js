var Elixir = require('laravel-elixir');
var runTests = require('./shared/Tests');

var config = Elixir.config;


/*
 |----------------------------------------------------------------
 | Behat Testing
 |----------------------------------------------------------------
 |
 | This task will trigger your entire Behat test suite and it
 | will show notifications indicating the success or failure
 | of that test suite. It's works great with the tdd task.
 |
 */

Elixir.extend('behat', function(src, options) {
    runTests({
        name: 'behat',
        binary: 'behat',
        category: 'bdd',
        src: src || (config.testing.behat.path + '/**/*.feature'),
        plugin: Elixir.Plugins.behat,
        pluginOptions: options || config.testing.behat.options
    });
});
