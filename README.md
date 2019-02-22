# getComments.js
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
getComments()
```
get all comments inside a element
```js
getComments(document.getElementById('someDiv'))
```
get the first comment that match a regex pattern
```js
getComments(document, /hey/i)
```
get the first comment is filtered by a function
```js
getComments(document, (text, comment) => {
    this.breakOnFirst = true; //I only need the first comment
    return text.substring(0,4) === "Lorem"; //does it starts with "Lorem" 
})
```
get All comments that match a regex pattern
```js
getComments(document, /foo/g) // notice the global flag on the regex
```  

get all comments filtered by a function
```js
getComments(document, (text, comment) => {
    const possibleValues = ['foo', 'bar', 'baz'];
    
    for(var i=0; i<possibleValues.length; i++) {
      if(text.indexOf(possibleValues[i]) > -1) return true;
    }
    return false;
})
```

## Suggestions / Questions

File a [issue](https://github.com/victornpb/getComments.js/issues) on this repository
