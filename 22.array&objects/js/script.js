console.log('You are at '+window.location);

// const cools = document.getElementsByClassName('cool');
// console.log(cools);
// console.log(cools[0]);
// cools[0].innerHTML = "I am the First div in first class"

// const divName = document.getElementsByTagName('div');
// console.log(divName[0]);
// divName[0].innerHTML = "This was choosen by Tag Name"

const selector = document.querySelectorAll('div');
console.log(selector[0]);
selector[0].innerHTML = "This div was choosen with querySelectorAll function";
console.log(selector[0]);