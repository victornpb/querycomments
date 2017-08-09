# getComments.js
Select HTML Comments like any other DOM Node, with this fast comment selector implementation.

```
<!-- This is a comment -->
```

JSFiddle Example [DEMO](https://jsfiddle.net/Victornpb/630garm8/)

## API

    getComments(context:DOMNode, filter:function|RegExp):Array


## Examples


get all comments

    getComments()

get all comments inside a element

    getComments(document.getElementById('someDiv'))

get the first comment that match a regex pattern

    getComments(document, /hey/i)

get the first comment is filtered by a function

    getComments(document, function(text, comment) {
        this.breakOnFirst = true; //I only need the 1
        return text.substring(0,4) === "Lorem"; //does it starts with "Lorem"
    })

get all comments that match a regex pattern

    getComments(document, /foo/g)
    //it is smart enought to figure out you meant: "give me all the comments that match this global regexp".
    

get all comments filtered by a function

    getComments(document, function(text, comment) {
        var possibleValues = ['foo', 'bar', 'baz'];
        
        for(var i=0; i<possibleValues.length; i++){
          if(text.indexOf(possibleValues[i]) > -1) return true;
        }
        return false;
    })


## Suggestions / Questions

File a [issue](https://github.com/victornpb/getComments.js/issues) on this repository
