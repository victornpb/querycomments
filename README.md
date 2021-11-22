# queryComments.js

![Node](https://img.shields.io/node/v/querycomments.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/querycomments.svg?style=flat-square)](https://www.npmjs.com/package/querycomments)
[![Travis](https://img.shields.io/travis/victornpb/querycomments/master.svg?style=flat-square)](https://travis-ci.org/victornpb/querycomments)
[![David](https://img.shields.io/david/victornpb/querycomments.svg?style=flat-square)](https://david-dm.org/victornpb/querycomments)
[![Coverage Status](https://img.shields.io/coveralls/victornpb/querycomments.svg?style=flat-square)](https://coveralls.io/github/victornpb/querycomments)
[![NPM](https://img.shields.io/npm/dt/querycomments.svg?style=flat-square)](https://www.npmjs.com/package/querycomments)

A super lightweight fps meter, with near zero overhead

## Installation

[Yarn](https://github.com/yarnpkg/yarn)

    yarn add querycomments

NPM

    npm install querycomments

If you don't use a package manager, you can [access `querycomments` via unpkg (CDN)](https://unpkg.com/querycomments/), download the source, or point your package manager to the url.

Select HTML Comments like any other DOM Node, with this fast comment selector implementation.

```html
<!-- This is a comment -->
```

JSFiddle Example [DEMO](https://jsfiddle.net/Victornpb/630garm8/)

## API

```ts
getComments(context:DOMNode, filter:function|RegExp):Array
```

## Examples

get all comments

```js
getComments();
```

get all comments inside a element

```js
getComments(document.getElementById('someDiv'));
```

get the first comment that match a regex pattern

```js
getComments(document, /hey/i);
```

get the first comment is filtered by a function

```js
getComments(document, (text, comment) => {
  this.breakOnFirst = true; //I only need the first comment
  return text.substring(0, 4) === 'Lorem'; //does it starts with "Lorem"
});
```

get All comments that match a regex pattern

```js
getComments(document, /foo/g); // notice the global flag on the regex
```

get all comments filtered by a function

```js
getComments(document, (text, comment) => {
  const possibleValues = ['foo', 'bar', 'baz'];

  for (var i = 0; i < possibleValues.length; i++) {
    if (text.indexOf(possibleValues[i]) > -1) return true;
  }
  return false;
});
```

## Suggestions / Questions

File a [issue](https://github.com/victornpb/getComments.js/issues) on this repository
