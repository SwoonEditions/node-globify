var test = require('tape'),
    globify = require('../'),
    template = require('../lib/template'),
    fs = require('fs'),
    rimraf = require('rimraf');

var setup = {
    src: '/tests/files/sample.js',
    out: { abs: '/tests/files/output.js', rel: '/files/output.js' },
    module: 'a:A'
};

test('Testing module import.', function(t) {
    t.plan(1);

    t.notEquals(globify, undefined, 'Module import is not undefined.');
    
    t.end();
});

test('Testing module functionality.', function(t) {
    t.plan(1);

    globify(setup.src, setup.out.abs, [ setup.module ])
        .then(() => 
        { 
            t.equal(fs.readFileSync(__dirname + setup.out.rel, 'utf8'),
            `var a = ${template('require(\'a\')', ['a','A'])};`, 'Module parses file correctly.');
            t.end()
        });
});

test.onFinish(() => rimraf(__dirname + setup.out.rel, (err) => new Error(err)));

