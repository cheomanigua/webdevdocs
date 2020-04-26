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

console.log(fruits[1]);
➡️ Banana

fruits[3] = 'Grape';
➡️ Array(4) [ "Apple", "Banana", "Pear", "Grape" ]

fruits.push('Mango');
fruits.unshift('Orange');
➡️ Array(6) [ "Orange", "Apple", "Banana", "Pear", "Grape", "Mango" ]

fruits.pop();
➡️ Array(5) [ "Orange", "Apple", "Banana", "Pear", "Grape" ]

console.log(Array.isArray('Mango'));
➡️ false

console.log(fruits.indexOf('Banana'));
➡️ 2
```

Iteration A

```js
for (let i = 0; i < frutas.length; i++) {
	console.log(frutas[i]);
}
```

Iteration B

```
for (let i of frutas) {
	console.log(i);
}
```

### Objects

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
const todos = [
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
console.log(todos[1].text);
➡ Make dinner
```

#### Convert Object to JSON
```js
const todoJSON = JSON.stringify(todos);
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

#### High Order Array methods (forEach, map, filter)

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

### Functions

```js
function addNums(num1, num2) {
  return num1 + num2;
}

const addNums2 = (num1, num2) => num1 + num2;

console.log(addNums(5, 7));
console.log(addNums2(5, 7));
➡ 12
➡ 12
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

### USER FORM SCRIPT

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

# High Order Functions

### filter
```js
const canDrink = ages.filter(age => age >= 21);
const retailCompanies = companies.filter(company => company.category === 'Retail');
```

### map
```js
const agesSquare = ages.map(age => Math.sqrt(age));
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
```

### sort
```js
const sortAges = ages.sort((a, b) => a - b);
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
```

### reduce
```js
const ageSum = ages.reduce((total, age) => total + age, 0);
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
```

### Combined methods
```js
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
```

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

