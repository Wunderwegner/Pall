# Pall
Your best pall with promises. Module helps you control the Promise.all function by passing object with Promises. 
This is alpha version written in ES6 with Lodash library as a helper and it is design to be used in Node 4+.

# How to install
Just install package with npm:
```
npm install pall
```

...and require it in your project:
```
const Pall = require('pall');
```

# How to use it
The only argument of the function is object of Promises. 

First you need to prepare your promises, ex.:
```
function promiseOne() = {
    return new Promise((resolve, reject) => {
        resolve(...);
        reject(...);
    });
}
```

```
function promiseTwo() = {
    return new Promise((resolve, reject) => {
        resolve(...);
        reject(...);
    });
}
```


Then put these promises into the object:
```
const objectWithPromises = {
    p1: promiseOne(),
    p2: promiseTwo()
}
```

After that just put the object as an argument into Pall function:
```
Pall(objectWithPromises)
```
 
Since Pall under the hood executes simple Promise.all, you can just "then" and "catch" the function:
```
Pall(objectWithPromises)
    .then(resolve => {...})
    .catch(reject => {...});
```    

Resolve returns the very same object which you've passed as an argument, but with resolved promises.