---
title: "Javascript"
description: "Javascript reference guide"
---

### Strings

```js
const name = 'John';
const age = '30';
const tags = 'technology, computers, it, code';
```

```js
// Concatenation
const js = 'My name is ' + name + ' and I am ' + age;
// Template String
const es6 = `My name is ${name} and I am ${age}';

console.log(js);
console.log(es6);
```

#### String properties & Methods

```js
console.log(name.length);
➡️ 4

console.log(name.toUpperCase);
➡️ JOHN

console.log(name.toLowerCase);
➡️ john

console.log(s.substring(0,3);
➡️ Joh

console.log(s.substring(0,3).toUpperCase());
➡️ JOH

console.log(tags.split(', '));
➡️ Array(4) [ "technology", "computers", "it", "code" ]
```

### Arrays

```js
const fruits = new Array('Apple', 'Banana', 'Pear');
const frutas = ['Apple', 'Banana', 'Pear']; //preferred
```

```js
console.log(fruits);
➡️ Array(3) [ "Apple", "Banana", "Pear" ]

console.log(frutas);
➡️ Array(3) [ "Apple", "Banana", "Pear" ]

console.log(fruits.indexOf('Banana'));
➡️ 1

console.log(fruits[1]);
➡️ Banana

console.log(Array.isArray('Mango'));
➡️ false

fruits[3] = 'Grape';
➡️ Array [ "Apple", "Banana", "Pear", "Grape" ]

fruits.push('Mango');
➡️ Array [ "Apple", "Banana", "Pear", "Grape", "Mango" ]

fruits.pop();
➡️ Array [ "Apple", "Banana", "Pear", "Grape" ]

fruits.shift();
➡️ Array [ "Banana", "Pear", "Grape" ]

fruits.unshift('Apple');
➡️ Array [ "Apple", "Banana", "Pear", "Grape" ]

```

Iteration A

```js
for (let i = 0; i < frutas.length; i++) {
	console.log(frutas[i]);
}
```

Iteration B

```js
for (let i of frutas) {
	console.log(i);
}
```

### Sets

Set is a useful addition to your JavaScript toolkit, particularly for working with duplicate values in data.

In a single line, we can create a new Array without duplicate values from an Array that has duplicate values.

```js
const uniqueArray = [ ...new Set([1, 1, 2, 2, 2, 3])] // (3) [1, 2, 3]
```

**Set** can be used for finding the union, intersection, and difference between two sets of data. However, **Arrays** have a significant advantage over **Sets** for additional manipulation of the data due to the `sort()`, `map()`, `filter()`, and `reduce()` methods, as well as direct compatibility with `JSON` methods.

#### Convert a Set to Array
```js
const arr = [...set];
```

#### Convert an Array to Set
```js
const set = new Set([ "Apple", "Banana", "Pear" ]);
```

### Objects

Objects in JavaScript are collections of **key/value** pairs. The values can consist of **properties** and **methods**, and may contain all other JavaScript data types, such as strings, numbers, and Booleans.

```js
const person = {
  firstName: 'Pepe',
  lastName: 'Juan',
  age: 30,
  hobbies: ['music', 'movies', 'amebas'],
  address: {
    street: '69 high street',
    city: 'Babilonia',
    country: 'Mesopotamia'
  }
}
```

```js
console.log(person.firstName, person.hobbies[1]);
➡️ Pepe movies

console.log(person.address.city);
➡️ Babilonia

const {firstName, address: {city}} = person;
console.log(firstName, city);
➡️ Pepe Babilonia

// Add new property
person.email = 'pepe@babilonia.com';
console.log(person.email);
➡️ pepe@babilonia.com
```

```js
const todo = [
  {
    id: 1,
    text: 'Buy groceries',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Make dinner',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Reply emails',
    isCompleted: false
  }
]
```

```js
console.log(todo[1].text);
➡ Make dinner
```

#### Convert Object/Array to JSON
```js
const todoJSON = JSON.stringify(todo);
```

#### Convert JSON to Object/Array
```js
const todo = JSON.parse(todoJSON);
```

### Maps

 Maps are similar to Objects in that they hold key/value pairs, but Maps have several advantages over objects:

- **Size** - Maps have a `size` property, whereas Objects do not have a built-in way to retrieve their size.
- **Iteration** - Maps are directly iterable, whereas Objects are not.
- **Flexibility** - Maps can have any data type (primitive or Object) as the **key** to a value, while Objects can only have strings.
- **Ordered** - Maps retain their insertion order, whereas objects do not have a guaranteed order.

Due to these factors, Maps are a powerful data structure to consider. However, Objects have some important advantages as well:

- **JSON** - Objects work flawlessly with `JSON.parse()` and `JSON.stringify()`, two essential functions for working with JSON, a common data format that many REST APIs deal with.
- **Working** with a single element - Working with a known value in an Object, you can access it directly with the key without the need to use a method, such as Map’s `get()`.

#### Convert Object to Map
```js
const map = new Map(Object.entries(obj));
```

#### Convert Map to Object
```js
const obj = Object.fromEntries(map);
```

#### has(), get(), size, delete()

```js
// Initialize a new Map
const person = new Map([
  ['firstName', 'Pepe'],
  ['lastName:', 'Juan'],
  ['age', 30],
])

// Check if a key exists in a Map
person.has('lastName') // true
person.has('address') // false

// Get an item from a Map
person.get('firstName') // "Pepe"

// Get the count of items in a Map
person.size // 3

// Delete an item from a Map by key
person.delete('age') // true

// Empty a Map
person.clear()
```

#### keys(), values(), entries()

```js
console.log(person.keys())
➡
[Map Iterator] { 'firstName', 'lastName:', 'age' }
```

```js
console.log(person.values())
➡
[Map Iterator] { 'Pepe', 'Juan', 30 }
```

```js
console.log(person.entries())
➡
[Map Entries] {
  [ 'firstName', 'Pepe' ],
  [ 'lastName:', 'Juan' ],
  [ 'age', 30 ]
}
```

#### Iteration with Map

```js
// Log the keys and values of the Map with forEach
person.forEach((value, key) => {
  console.log(`${key}: ${value}`)
})

// Destructure the key and value out of the Map item
for (const [key, value] of person) {
  // Log the keys and values of the Map with for...of
  console.log(`${key}: ${value}`)
}
```

Both approaches will yield exactly the same result:

```js
firstName: Pepe
lastName:: Juan
age: 30
```

### Loops

#### While loop
```js
while(i < 10) {
  console.log(`For Loop Number: ${i}`);
  i++;
}
```

#### For loop

```js
for(let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}
```

```js
for(let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}
➡
Buy groceries
Make dinner
Reply emails

for(let i of todos) {
  console.log(i.text)
}
➡
Buy groceries
Make dinner
Reply emails
```

#### For...In Loop

The `for...in` statement iterates over the **properties** of an **object**.

```js
const entry1 = {
  id: 1,
  text: 'Buy groceries',
  isCompleted: true
}

// Print property names of object
for (i in entry1) {
  console.log(i);
}

➡
id
text
isCompleted
```

We can also access the values of each property by using the property name as the index value of the object.

```js
// Print property values of object
for (i in entry1) {
  console.log(entry1[i]);
}

➡
1
Buy groceries
true
```

All together:
```js
// Print names and values of object properties
for (i in entry1) {
  console.log(`${i}`.toUpperCase() + `: ${entry1[i]}`);
}

➡
ID: 1
TEXT: Buy groceries
ISCOMPLETED: true
```
#### For...Of Loop

The `for...of` statement iterates over the **properties** of **arrays** and **strings**.

```js
const fruits = ['Apple', 'Banana', 'Pear']

// Loop through both index and element
for (let i of fruits) {
  console.log(i);
}

➡
Apple
Banana
Pear
```

It is also possible to print out the index associated with the index elements using the `entries()` method:


```js
// Loop through both index and element
for (let [index, i] of fruits.entries()) {
  console.log(index, i);
}

➡
0 Apple
1 Banana
2 Pear
```

### Functions

#### Normal and arrow functions

```js
//Normal functions
function addNums1(num1, num2) {
  return num1 + num2;
}

const addNums2 = function (num1, num2) {
  return num1 + num2;
}

// Arrow function
const addNums3 = (num1, num2) => num1 + num2;

console.log(addNums1(5, 7));
console.log(addNums2(5, 7));
console.log(addNums3(5, 7));
➡ 12
➡ 12
➡ 12
```

#### High Order functions for Arrays (forEach, map, filter)

```js
todos.forEach(function(i) {
  console.log(i.text);
})
➡ Buy groceries
➡ Make dinner
➡ Reply emails
```

```js
const todoText = todos.map(function(i) {
  return i.text;
})

console.log(todoText);
➡ Array(3) [ "Buy groceries", "Make dinner", "Reply emails" ]
```

```js
const todoCompleted = todos.filter(function(i) {
  return i.isCompleted === true;
})

console.log(todoCompleted);
➡ (2) […]
➡ 0: Object { id: 1, text: "Buy groceries", isCompleted: true }
➡ 1: Object { id: 1, text: "Make dinner", isCompleted: true }
➡ length: 2
```

```js
const todoCompleted = todos.filter(function(i) {
  return i.isCompleted === true;
}).map(function(i) {
  return i.text;
})
console.log(todoCompleted);
➡ Array [ "Buy groceries", "Make dinner" ]
```

#### High Order functions for Objects (filter, map, sort, reduce)

All examples of using high order functions fetch the information from this object:

```
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
```

#### filter
```js
const canDrink = ages.filter(age => age >= 21);
const retailCompanies = companies.filter(company => company.category === 'Retail');
```

#### map
```js
const agesSquare = ages.map(age => Math.sqrt(age));
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
```

#### sort
```js
const sortAges = ages.sort((a, b) => a - b);
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
```

#### reduce
```js
const ageSum = ages.reduce((total, age) => total + age, 0);
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
```

#### Combined methods
```js
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
```

### Classes

#### Pre-class (old way)

```js
// Constructor function
function Person(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '1-1-1980');
const person2 = new Person('Jimmy', 'Hendrix', '1-1-1970');

console.log(person1);
console.log(person2.lastName);
console.log(person1.getFullName());

➡ Object { firstName: "John", lastName: "Doe", dateOfBirth: "1-1-1980" }
➡ Hendrix
➡ John Doe
```

#### ES6 Class (new way)

```js
// ES6 Class
class Person {
  constructor (firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '1-1-1980');
const person2 = new Person('Jimmy', 'Hendrix', '1-1-1970');

console.log(person1);
console.log(person2.lastName);
console.log(person1.getFullName());

➡ Object { firstName: "John", lastName: "Doe", dateOfBirth: "1-1-1980" }
➡ Hendrix
➡ John Doe
```

## DOM

### Element selectors

```js
// Single Element Selectors
console.log(document.getElementById('my-form')); // old
console.log(document.querySelector('.container')); //recommended

// Multiple Element Selectors
console.log(document.querySelectorAll('.item')); //recommended
console.log(document.getElementsByTagName('li')); // old
console.log(document.getElementsByClassName('item')); //old

// Show all .items in the document
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
```

#### Manipulating the DOM

```js
const ul = document.querySelector('.items');
ul.remove(); // remove ul element
ul.lastElementChild.remove(); // remove last li element of ul
ul.firstElementChild.textContent = 'Hello'; // change first li element of ul
ul.children[1].innerText = 'Brad'; // change element li of ul[1]
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
```

### Events

#### Event handlers

When possible, it is better to use **event listeners** over **inline event handlers** and **event handler properties**, the main reason being the ability to set multiple event listeners on the same element when using **event listeners**.

For instance, with one button click we can change two elements (h4 and p):

```html
</- index.html ->

<body>
	<button id="btn">Click me</button>
	<h4>This header will change when clicking the button</h4>
	<p id="sentence">This </b>paragraph</b> will change when clicking the button</p>
	
	<script src="script.js"></script>
</body>
```

```js
// script.js

const button = document.getElementById('btn');
const header = document.querySelector('h4');
const paragraph = document.getElementById('sentence');

// Multiple listeners can be added to the same event and element
button.addEventListener('click', () => {
	header.textContent = "This is the changed header triggered by clicking on the button. Note that the very same button click changed the paragraph";
});

button.addEventListener('click', () => {
	paragraph.textContent = "This is the changed paragraph triggered by clicking on the button. Note that the very same button click changed header";
});
```

#### Mouse Event

```js
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});
```

#### Keyboard Event

```js
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});
```

### Example mouse event + DOM manipulation

```html
</- index.html ->

<button type="button" onclick="changeKnight()">Change night</button>
  <p>The castle belongs to <span id="knight">Percibal</span>, the greatest knight in the kingdom.</p>
```

```js
// script.js

function changeKnight() {
  let name = "Lancelot";
  document.getElementById("knight").innerHTML = name;
}
```

### Full example

```html
</- index.html ->

<body>
<h1>El Quijote</h1>
<button id="toboso">El Toboso</button>
<button id="madrid">Madrid</button>

<p>En algún lugar de <span id="lugar">La Mancha</span>, de cuyo nombre no puedo acordarme.</p>

<p><span id="lugar2">La Mancha</span> está en <span id="region">Castilla</span> y tiene una población de <span id="poblacion">5300</span> habitantes.

<script src="js/script.js"></script>
</body>
```

```js
// script.js

const toboso = document.getElementById("toboso");
const madrid = document.getElementById("madrid");

let lugar = ""
let region = "";
let poblacion = 0;

toboso.addEventListener("click", () => {
	lugar = "El Toboso";
	region = "La Meseta";
	poblacion = 850;
  document.getElementById("lugar").innerHTML = lugar;
  document.getElementById("lugar2").innerHTML = lugar;
  document.getElementById("region").innerHTML = region;
  document.getElementById("poblacion").innerHTML = poblacion;
});

madrid.addEventListener("click", () => {
	lugar = "Madrid";
	region = "la región central";
	poblacion = 25400;
  document.getElementById("lugar").innerHTML = lugar;
  document.getElementById("lugar2").innerHTML = lugar;
  document.getElementById("region").innerHTML = region;
  document.getElementById("poblacion").innerHTML = poblacion;
});
```

## Callbacks, promises, async/await

### Callbacks

```js
const posts = [
	{ title: 'Post One', body: 'This is port one'},
	{ title: 'Post Two', body: 'This is port two'}
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

createPost({ title: 'Post Three', body: 'This is port three' }, getPosts);
```

### Promises

```js
const posts = [
	{ title: 'Post One', body: 'This is port one'},
	{ title: 'Post Two', body: 'This is port two'}
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);
			const error = false;
			if(!error) {
				resolve();
			} else {
				reject('Error: something went wrong');
			}
		}, 2000);
	})
	
}

createPost({ title: 'Post Three', body: 'This is port three' })
	.then(getPosts)
	.catch(err => console.log(err));
```

### Async/Await

```js
const posts = [
	{ title: 'Post One', body: 'This is port one'},
	{ title: 'Post Two', body: 'This is port two'}
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);
			const error = false;
			if(!error) {
				resolve();
			} else {
				reject('Error: something went wrong');
			}
		}, 2000);
	})
	
}

async function init() {
	await createPost({ title: 'Post Three', body: 'This is port three' });
	
	getPosts();
}

init();
```

## USER FORM SCRIPT

#### Put DOM elements into variables

```js
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
```

#### Listen for form submit

```js
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
```

## Create elements on the fly
```js
const button = document.createElement('button')
button.textContent = 'Click me'
document.body.append(button)

const h1 = document.createElement('h1')
const p = document.createElement('p')

document.body.append(h1)
document.body.append(p)

class Display {
  constructor() {
    this.buttonText = 'New text'

    button.addEventListener('click', event => {
      event.target.textContent = this.buttonText;
      h1.textContent = "About createElement()";
      p.textContent = "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.";
    })
  }
}

new Display()
```

# Snippets

#### Navbar from transparent to solid when scrolling down

```js
window.onscroll = function() {
  if (window.pageYOffset > 150) {
    document.querySelector('nav').style.background = "#333";
    document.querySelector('nav').style.transition = "1s";
  } else {
    document.querySelector('nav').style.background = "transparent";
    document.querySelector('nav').style.transition = "1s";
  }
}
```

# Terminology

- **Template literal**: code inside backticks: `\` some code here \``
- **Spread operator**: `...`
- **Trailing commas**: Also referred as *dangling commas* or *final commas*. This is a JavaScript formatting practice in which the final item in a series when declaring a collection of data has a comma at the end.
- **Promise**: is JavaScript object that will return a value at some point in the future. Asynchronous functions can return promise objects instead of concrete values. If we get a value in the future, we say that the promise was fulfilled. If we get an error in the future, we say that the promise was rejected. Otherwise, the promise is still being worked on in a pending state.
