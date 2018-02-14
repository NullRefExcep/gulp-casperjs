var through = require('through2');
var spawn = require('child_process').spawn;
var log = require('fancy-log');
var PluginError = require('plugin-error');

const PLUGIN_NAME = 'gulp-casper-js';

function casper(options) {
    options = options || {};

    var args = [];

    if (options.xunit) {
        args.push('--xunit=' + options.xunit);
    }

    if (options.logLevel) {
        args.push('--log-level=' + options.loglevel);
    }

    if (options.engine) {
        args.push('--engine=' + options.engine);
    }

    if (options.includes) {
        args.push('--includes=' + options.includes);
    }

    if (options.pre) {
        args.push('--pre=' + options.pre);
    }

    if (options.post) {
        args.push('--post=' + options.post);
    }

    if (options.failfast) {
        args.push('--fail-fast=');
    }

    if (options.concise) {
        args.push('--concise=');
    }

    if (options.nocolors) {
        args.push('--no-colors');
    }

    if (options.websecurity) {
        args.push('--web-security=' + options.websecurity);
    }

    var binPath = (typeof options.binPath === 'undefined') ? 'casperjs' : options.binPath;
    var cmd = (typeof options.command === 'undefined') ? 'test' : options.command;

    var files = [];

    var read = function(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            this.emit('error', new PluginError({
                plugin: PLUGIN_NAME,
                message: 'Streams are not supported.'
            }));
            return cb(null, file);
        }
        files.push(file.path);

        this.push(file);

        cb(null, file);
    };

    var end = function(cb) {
        cmd = cmd ? (Array.isArray(cmd) ? cmd : cmd.split(' ')) : [];
        var tempArr = cmd.concat(files);

        if (args.length) {
            tempArr = tempArr.concat(args);
        }

        var casperChild = spawn(binPath, tempArr);

        casperChild.stdout.on('data', function(data) {
            var msg = data.toString().slice(0, -1);
            log(PLUGIN_NAME + ':', msg);
        });

        var self = this;
        casperChild.on('close', function(code) {
            var success = code === 0;
            if (!success) {
                self.emit('error', new PluginError({
                    plugin: PLUGIN_NAME,
                    message: 'code ' + code
                }));
            }
            cb();
        });
    };

    return through.obj(read, end);
}

module.exports = casper;
