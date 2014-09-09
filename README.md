# vz Task

[![NPM](https://nodei.co/npm/vz.task.png?downloads=true)](https://nodei.co/npm/vz.task/)

No piece of software is ever completed, feel free to contribute and be humble

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

