[![NPM](https://nodei.co/npm/vz.task.png?downloads=true)](https://nodei.co/npm/vz.task/)

This package uses or may use at some point in the future ECMAScript 6 features. Use it on a compatible environment or transpile it with Traceur, Closure Compiler, es6-transpiler or equivalent. Please note that some of these have flaws and bugs, test your code carefully until you find a suitable tool for your task.

When cloning this repository, put the folder inside another named "node_modules" in order to avoid potential errors related to npm's dependency handling, and then run `npm install` on it.

No piece of software is ever completed, feel free to contribute and be humble.

# vz Task

**Note:** This package is supposed to be used in a browser context using a tool like browserify

## Sample usage:

```javascript

var Task = require('vz.task'),
    task = new Task(function(t1,t0){
      console.log('Hello world! ',t1,'ms have passed since the begining of the task');
      console.log('Also, last time you saw this was ',t1 - t0,'ms ago');
      
      if(t1 > 500){
        console.log('ok, so much time have passed, let\'s end this');
        this.stop();
      }else if(Math.random() < 0.02){
        console.log('you know what, I\'m gonna start over again');
        this.restart();
      }else if(Math.random() < 0.02){
        console.log('omg just look at the time! IT\'S PAUSE TIME!');
        this.pause();
      }
      
    });

task.start();

```

