### node-globify

Tool made out of frustration about most of the `browserify` transforms not working properly, and not traversing dependencies in order to remove all `require` keywords.

CLI usage exaple: 

`./globify.js --filename=/src/main.js --out=/dist/main.js react:React react-dom:ReactDOM whatever:WHATEVA`

This will make all modules aliased by right hand side global window variable, so it's available in the browser, without breaking your code. If you malformed the name or didn't provide alias after `:`, it will ignore this module.

CommonJS usage example:

```
import 'globify';

globify('/src/main.js', '/dist/main.js, [ 'react:React', 'rxjs:Rx' ]);

// Optionally, you can use it as a promise with the output

globify('/src/main.js', '/dist/main.js, [ 'react:React', 'rxjs:Rx' ])
  .then(output => /* do something other with output */ );


```

