#!/usr/bin/env node

var argv = require('yargs').argv,
    filename =  argv.filename,
    output = argv.out,
    globify = require('./index.js');

globify(filename, output, argv._);