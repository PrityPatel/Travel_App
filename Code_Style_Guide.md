#Project 3 Group Project: Code Style Guide
***************

These style guidelines follow <a href="https://github.com/google/styleguide">Google's style guides for Javascript, HTML, and CSS</a>.  They're just a starting point to make sure we're writing consistently styled code and to make Prity's job a little easier, so feel free to add to or modify this!

> Note on indentation:  We'll default to 2-space indentations for all our files, unless anyone prefers 4-space indentation for Javascript files (in which case we'll all have to agree on which convention to use).

#Javascript

##Naming
- `functionNamesLikeThis`
- `variableNamesLikeThis`
- `ClassNamesLikeThis`
- `EnumNamesLikeThis`
- `methodNamesLikeThis`
- `CONSTANT_VALUES_LIKE_THIS`
- `foo.namespaceNamesLikeThis.bar`
- `filenameslikethis.js`

##Function Declarations Within Blocks
Function declarations within blocks are not part of the ECMAScript.

```js
// Do not do this
if (x) {
  function foo() {}
}
```
```js
// This is OK
if (x) {
  var foo = function() {};
}
```


##Semicolons
- Put a semicolon after function expressions but not after function declarations.

  ```js
  // function expression
  var func1 = function(input) {
    return input;
  }; //semicolon here
  ```
  vs.

  ```js
  // function declaration
  function func1(input) {
    return input;
  } // no semicolon
  ```

- When using `var`, don't rely on implicit semicolon insertion, as it can sometimes result in unexpected behavior.

  ```js
  // Do not do this
  var x = {
    'i': 1,
    'j"  2
  }   // Missing semicolon here

  var y = [1, 2] // Missing semicolon here
  ```

##Strings
Prefer ' over ".  This makes it easier to create strings that include HTML.

```js
var msg = '<a href="/html/about">This is an HTML element</a>';
```

##Curly Braces
Start curly braces on the same line as whatever they're opening.

```js
if (something) {
  // ...
} else {
  // ...
}
```

##Closures
For <a href="https://google.github.io/styleguide/javascriptguide.xml?showone=Closures#Closures"> reasons having to do with garbage collection</a>, do this:

```js
// do this

function foo(element, a, b) {
  element.onclick = bar(a, b);
}

function bar(a, b) {
  return function() { /* uses a and b */ };
}
```

instead of this:

```js
// do not do this

function foo(element, a, b) {
  element.onclick = function() { /* uses a and b */ };
}
```

##Ternary Operators
When you have simple if / else statements, you may prefer to use a ternary operator.

Instead of this:
```js
if (val) {
  return foo();
} else {
  return bar();
}
```

you can write this:

```js
return val ? foo() : bar();
```

###Tip:
The ternary operator is useful when generating HTML, as in the following example:

```js
var html = '<input type="checkbox"' +
    (isChecked ? ' checked' : '') +
    (isEnabled ? '' : ' disabled') +
    ' name="foo">';
```

************

#HTML/CSS

##General Formatting
Use a new line for every block, list, or table element, and indent every such child element.  E.g.:

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
<ul>
  <li>Moe
  <li>Larry
  <li>Curly
</ul>
<table>
  <thead>
    <tr>
      <th scope="col">Income
      <th scope="col">Taxes
  <tbody>
    <tr>
      <td>$ 5.00
      <td>$ 4.50
</table>
```

##HTML Quotation Marks
Use ", not ' around attribute values

##CSS Quotation Marks
Use ', not " around attribute selectors and property values.

```css
/* Not recommended */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}
```
```css
/* Recommended */
@import url(//www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
```

##Capitalization
use only lowercase

```css
/* Not recommended */
color: #E5E5E5;
```

```css
/* Recommended */
color: #e5e5e5;
```
