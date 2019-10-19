# Vecta
![Build status](https://api.travis-ci.com/EvansMatthew97/vecta.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/EvansMatthew97/vecta/badge.svg?branch=master)](https://coveralls.io/github/EvansMatthew97/vecta?branch=master)

[Documentation](https://evansmatthew97.github.io/vecta/)

An immutable JavaScript/TypeScript 2D vector library.

```typescript
const vec = new Vecta(5, 10);
const vec1 = new Vecta(2, 3);
const dp = vec.dotProduct(vec1); // 40

console.log(vec); // Vecta { x: 5, y: 10 }
```

## Installation
Install the package using npm:
```
npm install vecta
```

Import the package
```typescript
import { Vecta } from 'vecta';
```
or for javascript:
```javascript
const { Vecta } = require('vecta');
```

## Features
### TypeScript support
The library is created with TypeScript, so native code completion is supported and well-documented.

### Immutable
Other great 2D vector libraries exist - but tend to not be immutable. Vecta is designed to be entirely immutable - x and y values cannot be changed.

Without immutability, you get situations like this:
```typescript
const vec = new Vector(5, 10);
const vec1 = vec.add(new Vector(2, 3));

vec === vec1; // true (is a Vector { x: 7, y: 13 })
```
Operators modify the source object instead of creating a copy.

I would expect this to work like primitive mathematics:
```typescript
const a = 5;
const b = a + 2;

a === b; // false. a = 5, b = 7
```
And so Vecta tries to accomplish this:
```typescript
const vec = new Vecta(5, 10);
const vec1 = vec.add(new Vecta(2, 3));

vec === vec1; // false
console.log(vec);  // Vecta { x: 5, y: 10 } 
console.log(vec1); // Vecta { x: 7, y: 13 }
```

### Function chaining
All methods that don't return a scalar (number) result are chainable:
```typescript
const vec = new Vecta(5, 10)
  .add(new Vecta(2, 3))
  .addScalar(2)
  .divScalar(1, 4)
  .sub(
    Vecta.random(
      new Vecta(-2, 4),
      new Vecta(3, -5)
    )
  )
  .invert()
  .dotProduct(-2, -9); // returns a scalar
```

### Performance
Because a new object is instantiated every time a method is called, performance *is* going to be worse than other libraries; **however**, the fact that other libraries change the object's properties means that you will likely be cloning the object several times in your calculations anyways.

All functions have been implemented with simplicity and performance in mind; they attempt cause as little function calls as possible.

