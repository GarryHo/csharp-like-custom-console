
# csharp-like-custom-console
A custom console.
## Installation
```bash
$ npm install csharp-like-custom-console
```
## Important notes
- You **must** put the code after a `Console.Read()` in the callback
- You **must** do `Console.Die()` at the end
## How to use

Create `Console` object
```js
const cons = require('csharp-like-custom-console');
const Console = new cons({
	inp: process.stdin,
	out: process.stdout,
});
```
Kill the process
```js
Console.Die();
```
```js
Console.Die();
```
Print something 
```js
Console.Write("[insert text here]");
```
```js
const cons = require('csharp-like-custom-console');
const Console = new cons({
	inp: process.stdin,
	out: process.stdout,
});

// Print something
Console.Write('Hello World');

Console.Die();
```
Read input from the user
```js
Console.Read("[insert text here]", function (result) {
	// ...
});
```
```js
const cons = require('csharp-like-custom-console');
const Console = new cons({
	inp: process.stdin,
	out: process.stdout,
});

// Print something
Console.Write('Hello World');
// Read input from the user
Console.Read('Input your name here: ', function (result) {
	Console.Write(`Your name is ${result}`);
	// Note: everything you want to do after reading input should go in this callback, even other inputs
	Console.Write('After reading input');
	Console.Read('Input your age here: ', function (result) {
		if (typeof age == 'number') {
			Console.Write(`Your are ${result} years old`);
		}
		else {
			// ...
		}
		
		Console.Die();
	});
});
```
Throwing errors
```js
Console.Error('[insert error here]');
```
```js
const cons = require('csharp-like-custom-console');
const Console = new cons({
	inp: process.stdin,
	out: process.stdout,
});

// Print something
Console.Write('Hello World');
// Read input from the user
Console.Read('Input your name here: ', function (result) {
	Console.Write(`Your name is ${result}`);
	// Note: everything you want to do after reading input should go in this callback, even other inputs
	Console.Write('After reading input');
	Console.Read('Input your age here: ', function (result) {
		if (parseInt(result) == result) {
			Console.Write(`Your are ${result} years old`);
		}
		else {
			// Throwing errors
			Console.Error('Age is not a whole number');
		}
		
		Console.Die();
	});
});
```
Evaluating and printing
```js
Console.Eval("[insert code here]");
```
```js
const cons = require('csharp-like-custom-console');
const Console = new cons({
	inp: process.stdin,
	out: process.stdout,
});

// Print something
Console.Write('Hello World');
// Read input from the user
Console.Read('Input your name here: ', function (result) {
	Console.Write(`Your name is ${result}`);
	// Note: everything you want to do after reading input should go in this callback, even other inputs
	Console.Write('After reading input');
	Console.Read('Input your age here: ', function (result) {
		if (parseInt(result) == result) {
			Console.Write(`Your are ${result} years old`);
		}
		else {
			// Throwing errors
			Console.Error('Age is not a whole number');
		}
		
		// Evaluating and printing
		Console.Write("1 + 1 =");
		Console.Eval("1 + 1");
		
		Console.Die();
	});
});
```

Clearing the console
```js
Console.Clear();
```
```js
const cons = require('csharp-like-custom-console');
const Console = new cons({
	inp: process.stdin,
	out: process.stdout,
});

// Print something
Console.Write('Hello World');
// Read input from the user
Console.Read('Input your name here: ', function (result) {
	Console.Write(`Your name is ${result}`);
	// Note: everything you want to do after reading input should go in this callback, even other inputs
	Console.Write('After reading input');
	Console.Read('Input your age here: ', function (result) {
		if (parseInt(result) == result) {
			Console.Write(`Your are ${result} years old`);
		}
		else {
			// Throwing errors
			Console.Error('Age is not a whole number');
		}
		
		// Evaluating and printing
		Console.Write("1 + 1 =");
		Console.Eval("1 + 1");
	
		// Clearing the console
		Console.Read('Do you want to clear the console?: ', function (result) {
			if (result.toLowerCase() == 'yes') {
				Console.Clear();
			}
			
			Console.Die();
		})		
	});
});
```
## Questions
Any questions or suggestions? 
Contact us at
cs.like.custom.console.node@gmail.com
