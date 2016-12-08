var appRoot = require('app-root-path').path;
    globber = require('./lib/template'),
    fs = require('fs'),
    Promise = require('bluebird'),

module.exports = (filename, output, argv) => {
    return new Promise(function(resolve, reject) {
        if(!filename || !output ) throw new Error('Both filename and output are required!');
        var modules = argv
                .filter(module => module.indexOf(":") !== -1 )
                .map(module => module.split(":"));

        fs.readFile(appRoot + filename, 'utf-8', (err, data) =>
        {
            var replaced = modules
                .reduce((text, module) => globber(text, module), data);

            fs.writeFile(appRoot + output, replaced, (err) => {
                if (err) { reject(err) };
                resolve(output);
                console.log('Preprocessed ' + filename + ' and replaced [ ' + argv.join(", ") + ' ]');
            });
        });
        }
    );
}